<template>
    <div class="notes">

        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea
                        v-model="newNote"
                        class="textarea"
                        placeholder="Add a new note"
                        ref="newNoteRef"
                    />
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button
                        @click="addNote"
                        :disabled="!newNote"
                        class="button is-link has-background-success"
                    >
                        Add New Note
                    </button>
                </div>
            </div>
        </div>


        <Note
            v-for="note in notes"
            :key="note.id"
            :note="note"
        />

    </div>
    {{ newNote }}
</template>

<script setup>
/**
 * imports
 */

import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import Note from '@/components/Notes/Note.vue'

/**
 * notes
 */

const newNote = ref(''),
    notes = ref([
        {
            id: 'id1',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptas vitae porro praesentium earum, corporis corrupti, cum blanditiis laudantium molestias adipisci, saepe deleniti esse assumenda? Commodi dolorem quisquam ad eius.'
        },
        {
            id: 'id2',
            content: 'ium earum, corporis corrupti, cum blanditiis laudantium molestias adipisci, saepe deleniti esse assumenda?'
        }
    ]),
    newNoteRef = ref(null);

/**
 * methods
 */

const addNote = () => {
    let note = {
        id: uuidv4(),
        content: newNote.value,
    }
    notes.value.unshift(note);
    newNote.value = '';
    newNoteRef.value.focus();
}
</script>