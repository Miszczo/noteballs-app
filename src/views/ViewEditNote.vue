<template>
    <div class="edit-note">
        <AddEditNote
            v-model="noteContent"
            bg-color="link"
            textareaPlaceholder="Edit note"
            label="Edit Note"
            ref="addEditNoteRef"
        >
            <template #buttons>
                <RouterLink
                    to="/"
                    class="button is-link is-light"
                >
                    Cancel
                </RouterLink>
                <button
                    class="button is-link has-background-link"
                    :disabled="!noteContent"
                >
                    Save note
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
/**
 * imports
 */
import { ref } from 'vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue';

/**
 * notes
 */

const noteContent = ref('');
</script>