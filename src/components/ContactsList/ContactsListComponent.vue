<script setup lang="ts">
import UserList from './UsersList/UsersList.vue'
import SearchComponent from './SearchComponent/SearchComponent.vue'
import { ref } from 'vue'
const filterValue = ref('')
const changeFilterValueHandler = (data: string) => {
  filterValue.value = data
}
</script>

<template>
  <div class="contacts__container">
    <h2 class="contacts__title">Messages</h2>
    <SearchComponent
      :filter-value="filterValue"
      @change-filter-value-handler="changeFilterValueHandler"
    />
    <UserList :filter-value="filterValue" class="loader" />
  </div>
</template>

<style scoped lang="scss">
.loader {
  margin: 0 auto;
}
.contacts {
  &__container {
    display: flex;
    flex-direction: column;

    width: 371px;
    padding: 20px 0px;
    box-sizing: border-box;
    border-right: 1px solid #e3e8e7;
  }
  &__title {
    margin-left: 24px;
    color: #171c1b;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
