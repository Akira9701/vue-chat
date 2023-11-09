<script setup lang="ts">
import { computed, onMounted, toRefs, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { IUser } from '../../../types'
import UserItem from './UserItem/UserItem.vue'
import LoaderComponent from '../../shared/Loader/LoaderComponent.vue'
import glassIcon from '../../../assets/img/icons/glass.svg'
const props = defineProps<{
  filterValue: string
}>()

const { filterValue } = toRefs(props)

interface IResults {
  results: Omit<IUser, 'id'>[]
}

const fakeDataUrl = `https://randomuser.me/api/?results=3&inc=name,gender,email,nat,picture&noinfo`
const initLoading = ref<boolean>(true)
const activeChatId = ref<string>('')
const list = ref<IUser[] | never>([])
const filteredList = computed(() => {
  console.log('filteredList is recalculated')
  return list.value.filter(el => el.name.first.includes(filterValue.value))
})
onMounted(() => {
  fetch(fakeDataUrl)
    .then(res => res.json())
    .then((res: IResults) => {
      initLoading.value = false
      list.value = res.results.map(el => ({ ...el, id: uuidv4() }))
    })
})
</script>

<template>
  <div class="user-list" v-if="!initLoading">
    <!-- <p>{{ filteredList }}</p> -->
    <UserItem
      v-for="user of filteredList"
      :user="user"
      :current-user="activeChatId"
      @handle-active-id="
        (id: string) => {
          activeChatId = id
        }
      "
    />
  </div>
  <LoaderComponent v-else />
</template>

<style lang="scss">
.user-list {
  width: 100%;
  .active-item {
    border-left: #329993 4px solid;
    background: #e8f7f7;
  }
  .ant-list-item {
    padding: 24px 24px;
    cursor: pointer;
    transition-duration: 0.2s;
  }

  .ant-list-item:hover {
    background: #e8f7f7;
  }

  .ant-list-item-meta {
    .ant-list-item-meta-avatar {
      width: 58px;
      height: 58px;
      span {
        width: 100%;
        height: 100%;
      }
    }
    .ant-list-item-meta-description {
      overflow: hidden;
      color: #465352;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px; /* 128.571% */
    }
    .ant-list-item-meta-title {
      a {
        color: #171c1b;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }
}
</style>
