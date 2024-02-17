import { watch } from 'vue';

export function useWatchCharacters(valueToWatch) {

    watch(valueToWatch, (newValue) => {
        if (newValue.length >= 100) {
            console.log(newValue.length)
            alert("Too long note! Only 100 charactes allowed");
        }
    })

}


