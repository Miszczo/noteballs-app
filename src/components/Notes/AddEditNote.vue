<template>
    <div
        class="card p-4 mb-5"
        :class="`has-background-${props.bgColor}-dark`"
    >
        <label
            v-if="props.label"
            class="label has-text-white"
        >
           {{ props.label }}
        </label>
        <div class="field">
            <div class="control">
                <textarea
                    v-model="model"
                    class="textarea"
                    :placeholder="textareaPlaceholder"
                    ref="textareaRef"
                />
            </div>
        </div>
        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        </div>
    </div>
</template>

<script setup>
/**
 * imports
 */

import { ref } from 'vue';

/**
 * props
 */

const props = defineProps({
    bgColor: {
        type: String,
        default: "success"
    },
    textareaPlaceholder: {
        type: String,
        default: "Add a new note"
    },
    label: {
        type: String
    }
})

/**
 *  variables 
 */

const model = defineModel(),
    textareaRef = ref(null);

/**
 * methods
 */

const focusTextarea = () => {
    textareaRef.value.focus();
}

defineExpose({
    focusTextarea
})
</script>