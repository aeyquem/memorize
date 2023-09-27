<template>
  <main class="">
    <section>
      <PlayerInfo />
    </section>
    <section class="flex justify-center flex-wrap gap-4 p-6">
      <Card
        v-for="card in game.cards"
        :key="card.id"
        :isFlipped="card.isFlipped"
        :card="card"
        @click.prevent="handleCardClicked(card)"
      />
    </section>
    <section>
      <ScoreInfo :score="game.score" />
    </section>
  </main>
  <Modal :visible="!player.playerName">
    <UserInputModal />
  </Modal>
  <Modal :visible="game.isGameWon">
    <WonScreen />
  </Modal>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Card from './components/Card/Card.vue';
import PlayerInfo from './components/PlayerInfo/PlayerInfo.vue';
import ScoreInfo from './components/ScoreInfo/ScoreInfo.vue';
import UserInputModal from './components/UserInputModal/UserInputModal.vue';
import Modal from '@/components/Modal/Modal.vue';
import WonScreen from './components/WonScreen/WonScreen.vue';
import { usePlayerStore } from '@/stores/player.store.js';
import { useGameStore } from '@/stores/game.store.js';

const player = usePlayerStore();
const game = useGameStore();

const playerHasName = ref(false);

const flipped = ref({
  slug: null,
  id: null,
  isFlipped: null,
});
const canClick = ref(true);

onMounted(async () => {
  game.fetchCards();
});

function checkPlayerName() {
  if (player.playerName) {
    playerHasName.value = true;
  } else {
    playerHasName.value = false;
  }
}

function handleCardClicked(card) {
  //verify we can click a card
  if (game.wonCards.has(card.slug)) {
    return;
  }

  if (!canClick.value) {
    return;
  }
  //prevent user from clicking again while we are checking the cards
  canClick.value = false;

  //flip the card
  card.isFlipped = true;
  //check if we have a flipped card
  if (flipped.value.slug === null) {
    console.log('adding data');
    flipped.value = card;
    console.log(flipped.value);
    canClick.value = true;
    return;
  }

  //check if we are not clickikg the same card twice
  if (flipped.value.id === card.id) {
    canClick.value = true;
    return;
  }

  //if we have a flipped card, check if the card is the same as the one flipped before
  if (flipped.value.slug === card.slug) {
    console.log('same card');
    game.wonCards.add(card.slug);
    flipped.value = {
      slug: null,
      id: null,
      isFlipped: false,
    };
    game.score.right++;
    canClick.value = true;
  }
  //if not, reset the flipped card and the card we clicked
  else {
    console.log('wrong card');
    game.score.wrong++;
    setTimeout(() => {
      card.isFlipped = false;
      flipped.value.isFlipped = false;
      flipped.value = {
        slug: null,
        id: null,
        isFlipped: null,
      };
      canClick.value = true;
    }, 1000);
  }

  //check if we won the game
  if (game.wonCards.size === game.cards.length / 2) {
    game.isGameWon = true;
  }
}
player.$subscribe((mutation, state) => {
  localStorage.setItem('playerName', JSON.stringify(state.playerName));
});
checkPlayerName();
</script>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: space-between;
  position: relative;
}
</style>
