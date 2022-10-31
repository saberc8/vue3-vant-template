<template>
  <div class="app-page-dashboard">
    <ol class="demo-ol-list">
      <li>
        <h1 class="m-1">按钮</h1>
        <div class="demo-ol-body">
          <van-space size="1rem">
            <van-button type="primary" @click="onSubmit">开始</van-button>
            <van-button type="primary" @click="stopLoading">停止</van-button>
          </van-space>
        </div>
      </li>
    </ol>
  </div>
  <van-skeleton title :row="3" :loading="showSkeleton" />
  <van-notice-bar left-icon="volume-o" :text="name" />
  <HelloWorld msg="Welcome to Your Vue.js + Vite App" />
</template>

<script lang="ts" setup>
import { useLoading } from '@/hooks/useLoading'
import { useName } from '@/hooks/useName'
const { startLoading, stopLoading } = useLoading()
const showSkeleton = ref(true)
const { setName, name } = useName()
setTimeout(() => {
  setName('3000ms后设置name')
}, 3000)
const onSubmit = () => {
  startLoading()
  setTimeout(() => {
    stopLoading()
  }, 3000)
}
</script>
