<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { IUser } from '../../../../types'
const { user, currentUser } = defineProps<{
  user: IUser
  currentUser: string
}>()
</script>

<template>
  <div
    v-bind:class="{ 'user-item-active': user.id === currentUser }"
    class="user-item"
    @click="
      () => {
        $emit('handleActiveId', user.id)
      }
    "
  >
    <div class="user-item__img">
      <img v-bind:src="user.picture.large" alt="" />
    </div>
    <div class="user-item__data">
      <div class="user-item__title">
        <p>{{ user.name.first }} {{ user.name.last }}</p>
      </div>
      <div class="user-item__desc">
        <p>Hey i'm using this chat</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-item {
  display: flex;
  padding: 24px;
  border-top: #e3e8e7 solid;
  transition-duration: 0.2s;
  cursor: pointer;
  &__data {
    margin-left: 10px;
  }
  &__img {
    width: 58px;
    height: 58px;
    overflow: hidden;
    border-radius: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__title {
    color: #171c1b;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__desc {
    overflow: hidden;
    color: #465352;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
  }
}

.user-item:first-child {
  border-top: none;
  // border-bottom: #e3e8e7 solid;
}

.user-item-active {
  border-left: #329993 4px solid;
}
.user-item:hover {
  background: #e8f7f7;
}
</style>
