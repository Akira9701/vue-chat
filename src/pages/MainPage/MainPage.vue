<script setup lang="ts">
import MenuComponent from '@/components/Menu/MenuComponent.vue'
import ContactsListComponent from '../../components/ContactsList/ContactsListComponent.vue'
import ChatComponent from '../../components/Chat/ChatComponent.vue'
</script>

<template>
  <div class="container">
    <MenuComponent />
    <ContactsListComponent />
    <ChatComponent />
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
