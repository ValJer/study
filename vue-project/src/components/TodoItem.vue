<script setup>
defineProps({
  todoItem: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <label class="list-group-item d-flex gap-3">
    <input class="form-check-input flex-shrink-0" type="checkbox" value="" style="font-size: 1.375em;">
    <span class="pt-1 form-checked-content">
      <strong>{{ todoItem.title }}</strong>
      <br>
      <span>{{ todoItem.body }}</span>
      <small class="d-block text-muted">
        <svg class="bi me-1" width="1em" height="1em"><use xlink:href="#calendar-event"/></svg>
        {{ todoItem.due }}
      </small>
    </span>
  </label>
</template>

<style scoped>

</style>