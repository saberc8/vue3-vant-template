<template>
  <div class="app-header">
    <van-nav-bar :title="(route.meta.title as string)" :left-arrow="route.name !== 'home'" @click-left="router.back()" @click-right="router.push('/login')">
      <template #right>
        <van-icon name="friends-o" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()
</script>

<style lang="scss">
.app-header {
  .van-nav-bar {
    background-color: #569aff;
    .van-nav-bar__title {
      color: #fff;
    }
    .van-icon {
      color: #fff;
    }
  }
}
</style>
