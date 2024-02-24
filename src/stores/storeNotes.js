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

const notesCollectionRef = collection(db, 'notes');
const notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'));

export const useStoreNotes = defineStore('storeNotes', {
    state: () => ({
        notes: [],
        notesLoaded: false,
    }),
    actions: {
        async getNotes() {
            this.notesLoaded = false;
            onSnapshot(notesCollectionQuery, (querySnapshot) => {
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
            });
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
