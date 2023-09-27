<template>
  <figure class="w-24 h-36 rounded-lg">
    <Transition name="flip" mode="out-in">
      <img
        v-if="isFlipped"
        :src="card.src"
        :alt="card.slug"
        :title="card.slug"
        class="w-full h-full object-cover rounded-lg border-[1px] border-amber-300"
      />
      <img
        v-else
        class="bg-[url('@/assets/card.webp')] w-full h-full rounded-lg border-[1px] border-white-200"
      />
    </Transition>
  </figure>
</template>

<script setup>
defineProps({
  card: {
    src: String,
    slug: String,
  },
  isFlipped: Boolean,
});
</script>
<style scoped>
.flip-enter-from,
.flip-leave-to {
  transform: rotateY(90deg);
}

.flip-enter-active,
.flip-leave-active {
  transition: all 0.1s ease;
}
</style>
