<script setup>
import TodoItem from "@/components/TodoItem.vue";
import {useCounterStore} from "@/stores/counter.js";

const counterStore = useCounterStore();
let count = counterStore.itemsCount;
let items = counterStore.items;

</script>

<template>
  <ul>
    <TodoItem v-for="item in items" :msg="item" />
  </ul>
  Items: {{ count }}
</template>

<style scoped>

</style>