import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid';

export const useStoreNotes = defineStore('storeNotes', {
    state: () => (
        {
            notes: [
                {
                    id: 'id1',
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptas vitae porro praesentium earum, corporis corrupti, cum blanditiis laudantium molestias adipisci, saepe deleniti esse assumenda? Commodi dolorem quisquam ad eius.'
                },
                {
                    id: 'id2',
                    content: 'ium earum, corporis corrupti, cum blanditiis laudantium molestias adipisci, saepe deleniti esse assumenda?'
                }
            ]
        }
    ),
    actions: {
        addNote(noteDescription) {
            let note = {
                id: uuidv4(),
                content: noteDescription,
            }
            this.notes.unshift(note)
        },

        deleteNote(id) {
            this.notes = this.notes.filter(note => note.id != id)
        }
    }
})