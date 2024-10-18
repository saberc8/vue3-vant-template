<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view> </router-view>
  </van-config-provider>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { reactive } from 'vue'
const themeVars = reactive({
  rateIconFullColor: '#07c160',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackground: '#07c160',
  buttonPrimaryBackground: '#07c160',
  buttonPrimaryBorderColor: '#07c160',
})
</script>

<style>
@font-face {
  font-family: py1;
  src: url('/public/fonts/py_0.ttf');
}
@font-face {
  font-family: ck;
  src: url('/public/fonts/ck.ttf');
}
body {
  font-family: 'Roboto,PingFang SC,-apple-system,BlinkMacSystemFont,Helvetica Neue,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif';
  min-width: 320px;
  position: relative;
}
</style>
