import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  let items = ref([
    { title: 'Learn JavaScript', body: 'For loops', due: '1:00–2:00pm' },
    { title: 'Learn VueJS', body: 'Conditional rendering', due: '2:00–3:00pm' },
    { title: 'Learn VueJS', body: 'State management', due: '3:00–4:00pm' }]

  )

  const itemsCount = computed(() => items.value.length)

  function addTodo(todoItem) {
    items.value.push(todoItem)
  }

  return { itemsCount, items, addTodo }
})
