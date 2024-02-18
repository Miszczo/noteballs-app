import { watch } from 'vue';

export function useWatchCharacters(valueToWatch, maxChars = 100) {
    watch(valueToWatch, (newValue) => {
        if (newValue.length >= maxChars) {
            alert(`Too long note! Only ${maxChars} charactes allowed`);
        }
    })

}


