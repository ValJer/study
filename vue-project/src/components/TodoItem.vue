<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})

</script>

<template>
<li>{{ msg }}</li>
</template>

<style scoped>

</style>