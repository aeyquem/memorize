<template>
  <div class="flex justify-evenly gap-6 px-8 py-4 bg-slate-100 rounded-t-lg text-2xl">
    <span>Right: {{ score.right }}</span>
    <span>|</span>
    <span>Wrong: {{ score.wrong }}</span>
  </div>
</template>
<script setup>
defineProps({
  score: {
    right: Number,
    wrong: Number,
  },
});
</script>
