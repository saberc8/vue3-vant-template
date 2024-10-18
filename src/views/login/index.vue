<template>
  <div class="app-login">
    <img class="logo" src="/logo.jpg" alt="" />
    <h2>华东师大国通语教学微平台</h2>
    <van-form class="login-form" ref="ruleForm" @submit="onSubmit">
      <van-cell-group class="login-form-group">
        <van-field
          v-model="formData.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
          size="large"
          clearable
        />
        <van-field
          v-model="formData.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          size="large"
          clearable
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="formData.captcha"
          name="验证码"
          label="验证码"
          placeholder="验证码"
          size="large"
          clearable
          :rules="[{ required: true, message: '请填写验证码' }]"
        />

        <van-field name="captcha" label=" ">
          <template #input>
            <img class="captcha" :src="captchaSrc" @click="getCaptchaImage" alt="" />
          </template>
        </van-field>
      </van-cell-group>
      <van-button class="btn" round block type="primary" native-type="submit"> 登录 </van-button>
    </van-form>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import useUserStore from '@/store/modules/user'
import { getSysRandomImage } from '@/api/sys'
const userStore = useUserStore()
const formData = reactive({
  username: '',
  password: '',
  checkKey: '',
  captcha: '',
})
const captchaSrc = ref('')
const ruleForm = ref<any>(null)

const onSubmit = (values: any) => {
  console.log(values)
  ruleForm.value.validate().then(() => {
    userStore.login(formData).then(() => {
      router.push({ path: '/' })
    })
  })
}

const getCaptchaImage = async () => {
  const checkKey = Math.floor(new Date() * Math.random())

  formData.checkKey = checkKey
  const t = await getSysRandomImage(checkKey)
  console.log(t, 'ttt-----')
  captchaSrc.value = t
}
getCaptchaImage()
</script>

<style scoped lang="scss">
.app-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // 渐变背景
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  height: 100vh;
  .logo {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    display: block;
  }
  h2 {
    text-align: center;
    margin-top: 10px;
  }
  .login-form {
    margin-top: 50px;
    width: 88%;
    height: 400px;
    .login-form-group {
      border-radius: 10px;
      overflow: hidden;
    }
  }
  .btn {
    margin-top: 60px;
  }
}
</style>
