<template>
  <form
    @submit.prevent="submit"
    class="flex flex-col justify-center max-w-xs gap-2 p-8 bg-orange-50 rounded-lg"
  >
    <label for="playerName" class="text-gray-600 font-semibold">Your name: </label>
    <input
      id="playerName"
      name="playerName"
      type="text"
      placeholder="Player 1"
      v-model.trim.lazy="inputName"
      required
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <br />
    <button
      type="submit"
      class="p-0.5 relative inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
    >
      <span
        class="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
      >
        Go to game!
      </span>
    </button>
  </form>
</template>
<script setup>
import { ref } from 'vue';
import { usePlayerStore } from '@/stores/player.store';

const player = usePlayerStore();
const inputName = ref('');

function submit() {
  player.playerName = inputName.value;
}
</script>
