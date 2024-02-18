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
                    v-autofocus
                    maxlength="100"
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

import { vAutofocus } from '@/directives/vAutofocus';
import { useWatchCharacters } from '@/use/useWatchCharacters.js';

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

const model = defineModel();
useWatchCharacters(model);
</script>