<template>
  <van-tabbar v-if="showTabbar" v-model="active" fixed :placeholder="true" :route="true">
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts" name="tabbar">
import type { TabbarType } from './typing'
import { useRoute } from 'vue-router'
const active = ref(0)
const showTabbar = ref(true)
const tabbarData: TabbarType[] = reactive([
  {
    icon: 'wap-home-o',
    title: '首页',
    to: {
      name: 'home',
    },
  },
  {
    icon: 'manager-o',
    title: '我的',
    to: {
      name: 'my',
    },
  },
])
const route = useRoute()
watch(
  () => route.name,
  (name) => {
    console.log(name);
    const findIndex = tabbarData.findIndex((item) => item.to.name === name)
    if (findIndex !== -1) {
      showTabbar.value = true
      active.value = findIndex
    } else {
      showTabbar.value = false
    }
  },
  { immediate: true },
)
</script>
