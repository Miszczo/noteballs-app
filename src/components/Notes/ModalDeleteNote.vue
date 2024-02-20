<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div
      ref="modalCardRef"
      class="modal-card"
    >
      <header class="modal-card-head has-background-success">
        <p class="modal-card-title has-text-white">
          Delete Note?
        </p>
        <button
          @click="closeModal"
          class="delete"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body">
        Are you sure
        you want to
        delete this
        Note?
      </section>
      <footer class="modal-card-foot has-background-white is-justify-content-flex-end">
        <button
          @click="closeModal"
          class="button"
        >Cancel</button>
        <button
          @click="storeNotes.deleteNote(props.noteId)"
          class="button is-danger"
        >
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
/**
 * imports
 */

import { onMounted, onUnmounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreNotes } from "@/stores/storeNotes";

/**
 * store
 */

const storeNotes = useStoreNotes();

/**
 * props
 */

const props = defineProps({
  noteId: {
    type: String,
    required: true,
  },
});

/**
 * refs
 */

const modalCardRef = ref(null);

/**
 * define model
 */

const model = defineModel();

/**
 * methods
 */

const closeModal = () => {
  model.value = false;
};

onClickOutside(modalCardRef, closeModal);

const handleKeyboard = (e) => {
  if (e.key == "Escape") {
    closeModal();
  }
};

/**
 * hooks
 */

onMounted(() => {
  document.addEventListener("keyup", handleKeyboard);
});

onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyboard);
});
</script>
