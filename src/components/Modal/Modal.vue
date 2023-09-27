<template>
  <Teleport to="#modal">
    <dialog
      v-if="visible"
      class="fixed inset-0 flex justify-center items-center w-full h-full bg-[rgba(209,209,209,0.23)] p-5 bg-opacity-60 backdrop-filter backdrop-blur-sm"
    >
      <slot> </slot>
    </dialog>
  </Teleport>
</template>
<script setup>
defineProps({
  visible: Boolean,
});
</script>
