<script lang="ts" setup>
import { useLoading } from '@/hooks'
import { Toast } from 'vant'

const { startLoading, stopLoading } = useLoading()

const onSubmit = () => {
  Toast('asdfsdf')
  startLoading()

  setTimeout(() => {
    stopLoading()
  }, 2000)
}
</script>

<template>
  <div class="app-page-dashboard">
    <ol class="demo-ol-list">
      <li>
        <h1>按钮</h1>
        <div class="demo-ol-body">
          <van-space size="1rem">
            <van-button type="primary" @click="onSubmit">开始</van-button>
          </van-space>
        </div>
      </li>
    </ol>
  </div>
</template>
