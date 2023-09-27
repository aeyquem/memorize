<template>
  <div class="flex gap-4 flex-col content-center items-center bg-amber-50 rounded-xl p-8 w-3/4">
    <p>Congrats {{ player.playerName }}!!</p>
    <h2 class="font-semibold text-4xl">🥳🥳You won!!!🥳🥳</h2>
    <p>It took you {{ game.score.wrong }} tries to get the {{ game.score.right }} cards right!</p>
    <br />
    <button
      type="button"
      @click.prevent="resetGame"
      class="p-0.5 relative inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
    >
      <span
        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
      >
        Play again!
      </span>
    </button>
  </div>
</template>
<script setup>
import { useGameStore } from '@/stores/game.store';
import { usePlayerStore } from '@/stores/player.store';

const game = useGameStore();
const player = usePlayerStore();

function resetGame() {
  game.resetGame();
}
</script>
