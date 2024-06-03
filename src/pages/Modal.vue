<template>
  <div class="overlay" v-show="modalActive">
    <div class="modal" v-show="modalActive">
      <button @click="$emit('close-modal')" class="close">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <button @click="copyContent" class="copy">
        <i class="fa-solid fa-copy"></i>
      </button>
      <h2 class="quote"><slot /></h2>
    </div>
  </div>
</template>

<script setup>
import './Modal.css'
defineEmits(["close-modal"])
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});

const copyContent = async () => {
    let text = document.getElementById('quote').innerHTML;
    console.log(text);
    try {
      await navigator.clipboard.writeText(text).value;
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
</script>
