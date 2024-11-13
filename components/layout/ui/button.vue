<template>
  <button
    class="btn bg-regular-1 py-18px rounded-10px font-circular text-17px px-27px"
  >
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps(["text"]);
</script>

<style>
</style>