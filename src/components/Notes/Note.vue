<template>
    <div class="card mb-5">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="columns is-mobile has-text-grey-light mt-5">
                    <small class="column">{{ dateFormatted }}</small>
                    <small class="column has-text-right">{{ noteLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink
                :to="`/edit-note/${note.id}`"
                class="card-footer-item"
                role="button"
            >
                Edit
            </RouterLink>
            <a
                @click="modals.deleteNote = true"
                class="card-footer-item"
                role="button"
            >
                Delete
            </a>
        </footer>
        <ModalDeleteNote
            v-if="modals.deleteNote"
            v-model="modals.deleteNote"
            :noteId="note.id"
        ></ModalDeleteNote>
    </div>
</template>

<script setup>
/**
 * imports
 */

import { computed, reactive } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { RouterLink } from 'vue-router';
import { useDateFormat, useNow } from '@vueuse/core'
import ModalDeleteNote from './ModalDeleteNote.vue';

/**
 * props
 */

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
});

/**
 * stores
 */

const storeNotes = useStoreNotes();

/**
 * date formatted
 */

const dateFormatted = computed(() => {
    let date = new Date(parseInt(props.note.date));
    return useDateFormat(date, 'MM-DD-YYYY HH:mm').value;
})

/**
 * computed
 */

const noteLength = computed(() => {
    const length = props.note.content.length;
    let description = props.note.content.length > 1 ? 'characters' : 'character';

    return `${length} ${description}`;
});

/**
 * modals
 */

const modals = reactive({
    deleteNote: false
});

</script>