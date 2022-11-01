<template>
  <div class="app-login">
    <h2>登录</h2>
    <van-form ref="ruleForm" @submit="onSubmit">
      <van-cell-group>
        <van-field
          v-model="formData.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="formData.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <van-button round block type="primary" native-type="submit"> 登录 </van-button>
    </van-form>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
const formData = reactive({
  username: '',
  password: '',
})
const ruleForm = ref<any>(null)

const onSubmit = (values: any) => {
  console.log(values)
  ruleForm.value.validate().then(() => {
    userStore.login(formData).then(() => {
      console.log(1)
      router.push({ name: 'home' })
    })
  })
}
</script>

<style scoped lang="scss">
.app-login {
  padding: 20px;
  h2 {
    text-align: center;
    letter-spacing: 10px;
  }
}
</style>
