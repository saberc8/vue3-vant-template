<script setup lang="ts" name="tabbar">
import type { TabbarType } from './typing'

const active = ref(0)
const tabbarData: TabbarType[] = reactive([
  {
    icon: 'wap-home-o',
    title: '主页',
    to: {
      name: 'home',
    },
  },
  {
    icon: 'star-o',
    title: '分类',
    to: {
      name: 'category',
    },
  },
  {
    icon: 'manager-o',
    title: '关于',
    to: {
      name: 'about',
    },
  },
])
</script>

<template>
  <van-tabbar v-model="active" fixed :placeholder="true" :route="true">
    <van-tabbar-item v-for="(item, index) in tabbarData" :key="index" :icon="item.icon" :to="item.to">
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>
