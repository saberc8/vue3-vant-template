<template>
  <div class="app-page-dashboard">
  <button @click="sendEvent">111</button>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full mb-4">
          <h4 class="text-xl text-gray-300">Filtering</h4>
          <div class="flex">
            <van-button class="inline" :upload="filterStr === '*'" @click="onFilter('*')">
              1
            </van-button>
            <van-button class="inline" :upload="filterStr === '.metal'" @click="onFilter('.metal')">
              2
            </van-button>
            <van-button class="inline" :upload="filterStr === '.transition'" @click="onFilter('.transition')">
              3
            </van-button>
            <van-button class="inline" :upload="filterStr === '.metal:not(.transition)'"
              @click="onFilter('.metal:not(.transition)')">
              4
            </van-button>
          </div>
        </div>
        <div class="w-full mb-4">
          <h4 class="text-xl text-gray-300">Sorting</h4>
          <div class="flex">
            <van-button class="inline" :upload="sorterStr === 'original-order'" @click="onSorter('original-order')">
              5
            </van-button>
            <van-button class="inline" :upload="sorterStr === 'name'" @click="onSorter('name')">
              6
            </van-button>
            <van-button class="inline" :upload="sorterStr === 'symbol'" @click="onSorter('symbol')">
              7
            </van-button>
            <van-button class="inline" :upload="sorterStr === 'number'" @click="onSorter('number')">
              8
            </van-button>
            <van-button class="inline" :upload="sorterStr === 'category'" @click="onSorter('category')">
              9
            </van-button>
          </div>
        </div>
        <div class="w-full">
          <div class="grid">
            <div class="element-item transition metal" data-category="transition">
              <h3 class="name"> Mercury </h3>
              <p class="symbol"> Hg </p>
              <p class="number"> 80 </p>
              <p class="weight"> 200.59 </p>
            </div>
            <div class="element-item metalloid" data-category="metalloid">
              <h3 class="name"> Tellurium </h3>
              <p class="symbol"> Te </p>
              <p class="number"> 52 </p>
              <p class="weight"> 127.6 </p>
            </div>
            <div class="element-item post-transition metal" data-category="post-transition">
              <h3 class="name"> Bismuth </h3>
              <p class="symbol"> Bi </p>
              <p class="number"> 83 </p>
              <p class="weight"> 208.980 </p>
            </div>
            <div class="element-item post-transition metal" data-category="post-transition">
              <h3 class="name"> Lead </h3>
              <p class="symbol"> Pb </p>
              <p class="number"> 82 </p>
              <p class="weight"> 207.2 </p>
            </div>
            <div class="element-item transition metal" data-category="transition">
              <h3 class="name"> Gold </h3>
              <p class="symbol"> Au </p>
              <p class="number"> 79 </p>
              <p class="weight"> 196.967 </p>
            </div>
            <div class="element-item alkali metal" data-category="alkali">
              <h3 class="name"> Potassium </h3>
              <p class="symbol"> K </p>
              <p class="number"> 19 </p>
              <p class="weight"> 39.0983 </p>
            </div>
            <div class="element-item alkali metal" data-category="alkali">
              <h3 class="name"> Sodium </h3>
              <p class="symbol"> Na </p>
              <p class="number"> 11 </p>
              <p class="weight"> 22.99 </p>
            </div>
            <div class="element-item transition metal" data-category="transition">
              <h3 class="name"> Cadmium </h3>
              <p class="symbol"> Cd </p>
              <p class="number"> 48 </p>
              <p class="weight"> 112.411 </p>
            </div>
            <div class="element-item alkaline-earth metal" data-category="alkaline-earth">
              <h3 class="name"> Calcium </h3>
              <p class="symbol"> Ca </p>
              <p class="number"> 20 </p>
              <p class="weight"> 40.078 </p>
            </div>
            <div class="element-item transition metal" data-category="transition">
              <h3 class="name"> Rhenium </h3>
              <p class="symbol"> Re </p>
              <p class="number"> 75 </p>
              <p class="weight"> 186.207 </p>
            </div>
            <div class="element-item post-transition metal" data-category="post-transition">
              <h3 class="name"> Thallium </h3>
              <p class="symbol"> Tl </p>
              <p class="number"> 81 </p>
              <p class="weight"> 204.383 </p>
            </div>
            <div class="element-item metalloid" data-category="metalloid">
              <h3 class="name"> Antimony </h3>
              <p class="symbol"> Sb </p>
              <p class="number"> 51 </p>
              <p class="weight"> 121.76 </p>
            </div>
            <div class="element-item transition metal" data-category="transition">
              <h3 class="name"> Cobalt </h3>
              <p class="symbol"> Co </p>
              <p class="number"> 27 </p>
              <p class="weight"> 58.933 </p>
            </div>
            <div class="element-item lanthanoid metal inner-transition" data-category="lanthanoid">
              <h3 class="name"> Ytterbium </h3>
              <p class="symbol"> Yb </p>
              <p class="number"> 70 </p>
              <p class="weight"> 173.054 </p>
            </div>
            <div class="element-item noble-gas nonmetal" data-category="noble-gas">
              <h3 class="name"> Argon </h3>
              <p class="symbol"> Ar </p>
              <p class="number"> 18 </p>
              <p class="weight"> 39.948 </p>
            </div>
            <div class="element-item diatomic nonmetal" data-category="diatomic">
              <h3 class="name"> Nitrogen </h3>
              <p class="symbol"> N </p>
              <p class="number"> 7 </p>
              <p class="weight"> 14.007 </p>
            </div>
            <div class="element-item actinoid metal inner-transition" data-category="actinoid">
              <h3 class="name"> Uranium </h3>
              <p class="symbol"> U </p>
              <p class="number"> 92 </p>
              <p class="weight"> 238.029 </p>
            </div>
            <div class="element-item actinoid metal inner-transition" data-category="actinoid">
              <h3 class="name"> Plutonium </h3>
              <p class="symbol"> Pu </p>
              <p class="number"> 94 </p>
              <p class="weight"> (244) </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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

  <van-skeleton title :row="3" :loading="showSkeleton" />
  <van-notice-bar left-icon="volume-o" :text="name" />
  <HelloWorld msg="Welcome to Your Vue.js + Vite App" />
  <van-button type="primary" @click="add">添加</van-button>
  <van-button type="primary" @click="changeList">打乱</van-button>
  <TransitionGroup name="list" tag="p">
    <span v-for="(item, index) in list" :key="index" class="list-item">
      {{ item }}
    </span>
  </TransitionGroup>
  <div class="element">
    <div class="element-item" v-for="item in list" :style="{ backgroundColor: item.color }">{{
        item.name
    }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useLoading } from '@/hooks/useLoading'
import { useName } from '@/hooks/useName'
import Isotope from 'isotope-layout'
import { lstat } from 'fs/promises'
import { cwd } from 'process'
import { ipcRenderer } from 'electron'


setTimeout(() => {
  ipcRenderer.on('main-process', (_event, ...args) => {
    console.log('[Receive Main-process message]:', ...args)
  })
  console.log(ipcRenderer, '1')
}, 1000);

lstat(cwd()).then(stats => {
  console.log('[fs.lstat]', stats)
}).catch(err => {
  console.error(err)
})
//did-finish-load
const sendEvent = () => {
  ipcRenderer.send('did-finish-load', 'Hello Main-process')
}

const { startLoading, stopLoading } = useLoading()
const showSkeleton = ref(true)
const { setName, name } = useName()
interface Item {
  name: string
  age: number
  color: string
}
setTimeout(() => {
  setName('3000ms后设置name')
}, 3000)
const onSubmit = () => {
  startLoading()
  setTimeout(() => {
    stopLoading()
  }, 3000)
}
const list: Item[] = reactive([
  {
    name: '张三',
    age: 18,
    color: '#eee',
  },
])
const add = () => {
  list.push({
    name: '王五' + Math.floor(Math.random() * 100),
    // 随机数
    age: Math.floor(Math.random() * 100),
    color: randomColor(),
  })
}

const changeList = () => {
  shuffle(list)
}
// 打乱数组
const shuffle = (arr: any[]) => {
  let i = arr.length
  while (i) {
    const j = Math.floor(Math.random() * i--)
      ;[arr[j], arr[i]] = [arr[i], arr[j]]
  }
  return arr
}
// 随机颜色
const randomColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, '0')
  )
}
let filterStr = '*'
let sorterStr = 'original-order'
let grid: any = null
onMounted(() => {
  nextTick(() => {
    grid = new Isotope('.grid', {
      itemSelector: '.element-item',
      layoutMode: 'fitRows',
      getSortData: {
        name: '.name',
        symbol: '.symbol',
        number: '.number parseInt',
        category: '[data-category]',
      },
    })
  })
})
const onFilter = (value: any) => {
  filterStr = value
  grid.arrange({ filter: value })
}
const onSorter = (value: any) => {
  sorterStr = value
  grid.arrange({ sortBy: value })
}

// 求和
const sum = (a: number, b: number) => {
  return a + b
}
// 一维数组转二维数组
const to2DArray = (arr: any[], size: number) => {
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}
</script>

<style lang="scss">
.element {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .element-item {
    width: 40px;
    height: 40px;
    margin: 10px;
  }
}

.v-move {
  transition: all 0.8s ease;
}

.v-leave-active {
  position: absolute;
}

/* ---- vuesax ---- */

.vs-sidebar__item.hasIcon {
  outline: none;
}

.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}

.con-form {
  width: 100%;
}

.con-form .flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.con-form .flex a {
  font-size: 0.8rem;
  opacity: 0.7;
}

.con-form .flex a:hover {
  opacity: 1;
}

.con-form .vs-checkbox-label {
  font-size: 0.8rem;
}

.con-form .vs-input-content {
  margin: 10px 0px;
  width: calc(100%);
}

.con-form .vs-input-content .vs-input {
  width: 100%;
}

.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);
}

.footer-dialog .new {
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
  font-size: 0.7rem;
}

.footer-dialog .new a {
  color: rgba(var(--vs-primary), 1) !important;
  margin-left: 6px;
}

.footer-dialog .new a:hover {
  text-decoration: underline;
}

.footer-dialog .van-button {
  margin: 0px;
}

/* ---- isotope ---- */

.grid {
  border: 1px solid #333;
  display: flex;
}

/* ---- .element-item ---- */

.element-item {
  position: relative;
  width: 30px;
  height: 30px;
  margin: 5px;
  background: #888;
  color: #262524;
}

.element-item>* {
  margin: 0;
  padding: 0;
}

.element-item .name {
  position: absolute;

  left: 10px;
  top: 60px;
  text-transform: none;
  letter-spacing: 0;
  font-size: 12px;
  font-weight: normal;
}

.element-item .symbol {
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 42px;
  font-weight: bold;
  color: white;
}

.element-item .number {
  position: absolute;
  right: 8px;
  top: 5px;
}

.element-item .weight {
  position: absolute;
  left: 10px;
  top: 76px;
  font-size: 12px;
}

.element-item.alkali {
  background: #f00;
  background: hsl(0, 100%, 50%);
}

.element-item.alkaline-earth {
  background: #f80;
  background: hsl(36, 100%, 50%);
}

.element-item.lanthanoid {
  background: #ff0;
  background: hsl(72, 100%, 50%);
}

.element-item.actinoid {
  background: #0f0;
  background: hsl(108, 100%, 50%);
}

.element-item.transition {
  background: #0f8;
  background: hsl(144, 100%, 50%);
}

.element-item.post-transition {
  background: #0ff;
  background: hsl(180, 100%, 50%);
}

.element-item.metalloid {
  background: #08f;
  background: hsl(216, 100%, 50%);
}

.element-item.diatomic {
  background: #00f;
  background: hsl(252, 100%, 50%);
}

.element-item.halogen {
  background: #f0f;
  background: hsl(288, 100%, 50%);
}

.element-item.noble-gas {
  background: #f08;
  background: hsl(324, 100%, 50%);
}
</style>
