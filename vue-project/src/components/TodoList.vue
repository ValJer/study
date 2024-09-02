<script setup>
import TodoItem from "@/components/TodoItem.vue";
import { useCounterStore } from "@/stores/counter.js";

const counterStore = useCounterStore();
let items = counterStore.items;

</script>

<template>

  <div class="list-group">
    <TodoItem v-for="item in items" :todo-item="item" />
  </div>

</template>

<style scoped>

</style>