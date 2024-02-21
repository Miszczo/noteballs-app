import { defineStore } from 'pinia';
import { collection, onSnapshot, doc, setDoc } from 'firebase/firestore';
import { db } from '@/js/firebase';

const notesCollectionRef = collection(db, 'notes');

export const useStoreNotes = defineStore('storeNotes', {
    state: () => ({
        notes: [],
    }),
    actions: {
        async getNotes() {
            onSnapshot(notesCollectionRef, (querySnapshot) => {
                let notes = [];
                querySnapshot.forEach((doc) => {
                    let note = {
                        id: doc.id,
                        content: doc.data().content,
                    };
                    notes.push(note);
                });
                this.notes = [...notes];
            });
        },
        async addNote(noteDescription) {
            let id = new Date().getTime().toString();

            await setDoc(doc(notesCollectionRef, id), {
                content: noteDescription,
            });
        },
        updateNote(id, description) {
            this.notes.find((note) => note.id == id).content = description;
        },
        deleteNote(id) {
            this.notes = this.notes.filter((note) => note.id != id);
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
