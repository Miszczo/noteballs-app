<template>
    <div class="edit-note">
        <AddEditNote
            v-model="noteContent"
            bg-color="link"
            textareaPlaceholder="Edit note"
            label="Edit Note"
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
                    @click="handleSaveClicked"
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
import { useStoreNotes } from '@/stores/storeNotes';
import { useRoute, useRouter } from 'vue-router';


/**
 * store
 */

const storeNotes = useStoreNotes();

/**
 * notes
 */

const route = useRoute();
const router = useRouter();

const noteContent = ref('');

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
    storeNotes.updateNote(route.params.id, noteContent.value);
    router.push('/');
}

</script>