<template>
  <div class="character-body body">
    <div class="flex-container">
      <div class="choice-btn-container">
        <button class="choice-btn btn-1" @click="() => goToAnime()">
          Anime
        </button>
        <button class="choice-btn btn-2">Character</button>
      </div>
      <h1 htmlFor="anime">Enter the of a character to get a quote!</h1>
      <div class="input-box">
        <input
          class="input-box"
          type="text"
          id="anime"
          placeholder="Character"
        />
      </div>
      <button class="btn" id="anime-btn" @click="api">Generate</button>
    </div>
    <Modal :modalActive="modalActive" @close-modal="toggleModal">
      <div id="quote">{{ quote }}</div>
    </Modal>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import axios from "axios";
import Modal from "./Modal.vue";

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

const router = useRouter();

const goToAnime = () => {
  router.push({ name: "home" });
};

const quote = ref("");
const setQuote = (newValue) => {
  quote.value = newValue;
};

const parameter = "character";

function value() {
  let name = document.getElementById("anime");
  let nameValue = name.value;
  return nameValue;
}

function animeName() {
  let name = value();
  return name;
}

const api = async () => {
  let name = animeName();
  const url = `https://waifu.it/api/v4/quote?${parameter}=${name}`;
  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization:
          "MTEwMDE0MTc1ODY1NjAzMjk3OQ--.MTcxNTY4NTI3Mw--.c086c921ff53",
      },
    });
    toggleModal();
    console.log(data.quote);
    console.log(data);
    let quote = data.quote;
    setQuote(quote);
  } catch (err) {
    alert("Please try a new entry");
    throw new Error(err.message);
  }
};
</script>
