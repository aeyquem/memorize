import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', () => {
  const playerName = ref(null);

  if (localStorage.getItem('playerName')) {
    playerName.value = JSON.parse(localStorage.getItem('playerName'));
  }

  return { playerName };
});
