<template>
    <div class="notes">

        <AddEditNote
            v-model="newNote"
            ref="addEditNoteRef"
        >
            <template #buttons>
                <button
                    @click="addNote"
                    :disabled="!newNote"
                    class="button is-link has-background-success"
                >
                    Add New Note
                </button>
            </template>
        </AddEditNote>

        <Note
            v-for="note in storeNotes.notes"
            :key="note.id"
            :note="note"
        />
    </div>
</template>

<script setup>
/**
 * imports
 */

import { ref, watch } from 'vue';
import Note from '@/components/Notes/Note.vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes';

/**
 * store
 */

const storeNotes = useStoreNotes();

/**
 * notes
 */

const newNote = ref('');

/**
 * methods
 */

const addNote = () => {
    storeNotes.addNote(newNote.value);
    newNote.value = '';
}
</script>