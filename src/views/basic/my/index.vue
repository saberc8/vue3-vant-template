
<template>
  <div class="app-page-my">
    <img src="/logo.jpg" alt="" />
    <div class="name">李华</div>
    <van-button class="btn" round block type="primary" @click="logout"> 退出登录 </van-button>
  </div>
</template>
<script setup lang="ts">
defineOptions({
	name: 'my',
})
import { useRouter } from 'vue-router'
const router = useRouter()
const logout = () => {
  localStorage.removeItem('token')
  router.push({ name: 'login' })
}
</script>
<style lang="scss" scoped>
.app-page-my {
  height: 100%;
  background-color: #f7f8fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    margin-top: 50px;
  }
  .name {
    margin-top: 20px;
    font-size: 20px;
    color: #000000;
  }
  .btn {
    margin-top: 50px;
    width: 80%;
  }
}
</style>
