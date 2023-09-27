<template>
  <span class="flex justify-evenly gap-6 px-8 py-4 bg-slate-100 rounded-b-lg text-2xl"
    >Welcome {{ player.playerName }}!</span
  >
</template>
<script setup>
import { usePlayerStore } from '@/stores/player.store';

const player = usePlayerStore();
</script>
