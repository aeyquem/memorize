import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', () => {
  const cards = ref([]);
  const score = ref({
    right: 0,
    wrong: 0,
  });

  const wonCards = ref(new Set());
  const isGameWon = ref(false);

  async function fetchCards() {
    if (cards.value.length === 0) {
      try {
        const url =
          'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20';
        const res = await fetch(url);
        const data = await res.json();
        const dirtyCards = data.entries;
        //clean cards
        const cleanCards = dirtyCards.map((card) => {
          return {
            id: null,
            slug: card.meta.slug,
            src: card.fields.image.url,
          };
        });

        //duplicate cards
        const duplicatedCards = cleanCards.flatMap((card) => [card, { ...card }]);

        //insert card id and state
        for (let i = 0; i < duplicatedCards.length; i++) {
          duplicatedCards[i].id = i;
          duplicatedCards[i].isFlipped = false;
        }

        cards.value = duplicatedCards;

        shuffleCards();
      } catch (e) {
        console.log(e);
      }
    }
  }

  function shuffleCards() {
    //randomize cards
    for (let i = cards.value.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // at random index
      [cards.value[i], cards.value[j]] = [cards.value[j], cards.value[i]];
    }
  }

  function resetGame() {
    score.value = {
      right: 0,
      wrong: 0,
    };
    wonCards.value = new Set();
    isGameWon.value = false;
    cards.value.forEach((card) => {
      card.isFlipped = false;
    });
    shuffleCards();
  }

  return {
    cards,
    score,
    wonCards,
    isGameWon,
    fetchCards,
    shuffleCards,
    resetGame,
  };
});
