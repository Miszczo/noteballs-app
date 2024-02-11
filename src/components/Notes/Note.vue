<template>
    <div class="card mb-5">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-5">
                    {{ noteLength }}
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <a
                class="card-footer-item"
                role="button"
            >
                Edit
            </a>
            <a
                @click.prevent="handleDeleteClicked"
                class="card-footer-item"
                role="button"
            >
                Delete
            </a>
        </footer>
    </div>
</template>

<script setup>
/**
 * imports
 */

import { defineProps, computed } from 'vue';

/**
 * props
 */
const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

/**
 * emits
 */

const emit = defineEmits(["deleteNote", "editNote"]);

/**
 * computed
 */

const noteLength = computed(() => {
    const length = props.note.content.length;
    let description = props.note.content.length > 1 ? 'characters' : 'character';

    return `${length} ${description}`;
})

/**
 * handle delete clicked
 */
const handleDeleteClicked = () => {
    emit("deleteNote");
}
</script>