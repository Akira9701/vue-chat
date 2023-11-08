<script setup lang="ts">
import { defineProps, ref } from 'vue'
const { filterValue } = defineProps<{
  filterValue: string
}>()
const text = ref<string>('')
</script>

<template>
  <div class="search__container">
    <input
      class="search__form"
      type="text"
      :value="filterValue"
      @input="
        event => {
          $emit('changeFilterValueHandler', event.target!.value)
        }
      "
    />
  </div>
</template>

<style lang="scss" scoped>
.search {
  &__container {
    padding: 12px 24px;
  }
  &__form {
    display: flex;
    padding: 12px 20px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-radius: 52px;
    border: 1px solid #e3e8e7;
    background: #fff;
    box-sizing: border-box;
    width: 100%;
  }
}
</style>
