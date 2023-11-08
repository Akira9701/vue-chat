<script setup lang="ts">
import { MessageOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div class="menu">
    <div class="menu__avatar">
      <img src="../../assets/img/avatar.png" />
    </div>
    <ul class="menu__buttons-list">
      <li class="menu__item">
        <MessageOutlined class="menu__item-icon" />
      </li>
    </ul>
  </div>
</template>

<style setup lang="scss">
.menu {
  padding: 37px 24px;
  width: 97px;
  box-sizing: border-box;
  background: white;
  height: 100vh;
  border-right: 1px solid #e3e8e7;

  &__avatar {
    border-radius: 100px;
    overflow: hidden;
    margin-bottom: 48px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__item {
    width: 52px;
    height: 52px;
    padding: 14px;
    box-sizing: border-box;
    cursor: pointer;
    &-icon {
      width: 100%;
      height: 100%;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
