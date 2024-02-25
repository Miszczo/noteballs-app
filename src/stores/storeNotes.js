import { defineStore } from 'pinia';
import {
    collection,
    onSnapshot,
    doc,
    addDoc,
    deleteDoc,
    updateDoc,
    query,
    orderBy,
} from 'firebase/firestore';
import { db } from '@/js/firebase';
import { useStoreAuth } from './storeAuth';

let notesCollectionRef;
let notesCollectionQuery;

let getNotesSnapshot = null;

export const useStoreNotes = defineStore('storeNotes', {
    state: () => ({
        notes: [],
        notesLoaded: false,
    }),
    actions: {
        init() {
            const storeAuth = useStoreAuth();
            notesCollectionRef = collection(
                db,
                'users',
                storeAuth.user.id,
                'notes'
            );
            notesCollectionQuery = query(
                notesCollectionRef,
                orderBy('date', 'desc')
            );
            this.getNotes();
        },
        async getNotes() {
            this.notesLoaded = false;

            getNotesSnapshot = onSnapshot(
                notesCollectionQuery,
                (querySnapshot) => {
                    let notes = [];
                    querySnapshot.forEach((doc) => {
                        let note = {
                            id: doc.id,
                            content: doc.data().content,
                            date: doc.data().date,
                        };
                        notes.push(note);
                    });

                    this.notes = [...notes];
                    this.notesLoaded = true;
                }
            );
        },
        clearNotes() {
            this.notes = [];
            
            // usubscribe from any active listener
            if (getNotesSnapshot) {
                getNotesSnapshot();
            }
        },
        async addNote(noteDescription) {
            let date = new Date().getTime().toString();

            await addDoc(notesCollectionRef, {
                content: noteDescription,
                date: date,
            });
        },
        async updateNote(id, description) {
            const washingtonRef = doc(notesCollectionRef, id);

            await updateDoc(washingtonRef, {
                content: description,
            });
        },
        async deleteNote(id) {
            await deleteDoc(doc(notesCollectionRef, id));
        },
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter((note) => note.id == id)[0].content;
            };
        },
        totalNotesCount: (state) => {
            return state.notes.length;
        },
        totalCharactersCount: (state) => {
            let charactersTotalLength = 0;
            state.notes.forEach((el) => {
                charactersTotalLength += el.content.length;
            });
            return charactersTotalLength;
        },
    },
});
