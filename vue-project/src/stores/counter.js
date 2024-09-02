import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  let items = ref(['Learn 1', 'Learn 2', 'Learn 3', 'Learn 4'])
  const itemsCount = computed(() => items.value.length)

  function addTodo(todoItems) {
    //todo: your code
  }

  return { itemsCount, items, addTodo }
})
