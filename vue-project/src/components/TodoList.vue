<script setup>
import TodoItem from "@/components/TodoItem.vue";
import { useCounterStore } from "@/stores/counter.js";
import { computed, ref} from 'vue';
const counterStore = useCounterStore();
let items = counterStore.items;
let counter = computed(() =>counterStore.itemsCount)

let newTodoBody = ref('')
function addTodo() {
  counterStore.addTodo({ title: 'Learn VueJS', body: newTodoBody.value, due: '3:00–4:00pm' })
}
function removeTodo(todo) {
  counterStore.removeTodo(todo)


}

</script>

<template>

  <div class="list-group">
    <TodoItem v-for="item in items" :todo-item="item" @remove-todo="removeTodo"/>
  </div>

  Counter: {{ counter }}
  <br>


<input type="text" v-model="newTodoBody">

<button @click="addTodo">Add todo</button>
</template>

<style scoped>

</style>