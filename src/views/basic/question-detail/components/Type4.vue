<template>
  <div class="q-type">
    <div class="q-child">
      <div v-for="(item, index) in metaData">
        <div class="title" v-html="item.title"></div>
        <div class="a-list">
          <div class="a-card" v-for="(citem, cidx) in item.leng">
            <div class="a-card-text" @click="handleAnswer(item, index, cidx)">点击回答</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <van-dialog v-model:show="show" title="回答" show-cancel-button>
    <div class="container-a">
      <div class="label">声母选项</div>
      <div class="list">
        <div
          class="item"
          :class="{ 'item-active': answerdata[currentAId].data[currentACId].shengmu === item }"
          @click="chooseShengmu(item)"
          v-for="(item, index) in shengmuList"
          :key="index"
          >{{ item }}</div
        >
      </div>
      <div class="label">韵母选项</div>
      <div class="list">
        <div
          class="item"
          :class="{ 'item-active': answerdata[currentAId].data[currentACId].yunmu === item }"
          v-for="(item, index) in yunmuList"
          @click="chooseYunmu(item)"
          >{{ item }}</div
        >
      </div>
      <div class="label">声调选项</div>
      <div class="list">
        <div
          class="item-v"
          v-for="(item, index) in shengdiaoList"
          :class="{
            'item-active': answerdata[currentAId].data[currentACId].shengdiao === item.name,
          }"
          :key="index"
          @click="chooseShengdiao(item)"
        >
          <img class="img1" v-if="index !== 4" :src="item.img" alt="" />
          <img class="img2" v-if="index === 4" :src="item.img" alt="" />
        </div>
      </div>
    </div>
  </van-dialog>
</template>

<script setup lang="ts">
import v1 from '@/assets/img/v1.png'
import v2 from '@/assets/img/v2.png'
import v3 from '@/assets/img/v3.png'
import v4 from '@/assets/img/v4.png'
import v5 from '@/assets/img/v5.png'

const emit = defineEmits(['callback'])
const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
  item: {
    type: Object,
    default: () => ({}),
  },
  qid: {
    type: String,
    default: '',
  },
  historyData: {
    type: Array,
    default: () => [],
  },
})

const metaData = ref([])

const shengmuList = ref([])
const yunmuList = ref([])
const show = ref(false)
const currentAId = ref(0)
const currentACId = ref(0)

const shengdiaoList = [
  {
    id: 1,
    name: '阴平',
    img: v1,
  },
  {
    id: 2,
    name: '阳平',
    img: v2,
  },
  {
    id: 3,
    name: '上声',
    img: v3,
  },
  {
    id: 4,
    name: '去声',
    img: v4,
  },
  {
    id: 5,
    name: '轻声',
    img: v5,
  },
]

const answerdata = ref([])

const chooseShengmu = (item) => {
  answerdata.value[currentAId.value].data[currentACId.value].shengmu = item
  emit('callback', props.qid, answerdata.value)
}

const chooseYunmu = (item) => {
  console.log(item, '---')
  answerdata.value[currentAId.value].data[currentACId.value].yunmu = item
  emit('callback', props.qid, answerdata.value)
}

const chooseShengdiao = (item) => {
  console.log(item, '---')
  answerdata.value[currentAId.value].data[currentACId.value].shengdiao = item.name
  emit('callback', props.qid, answerdata.value)
}

watch(
  () => props.item,
  (newVal) => {
    console.log(newVal, '--44444-')
    metaData.value = JSON.parse(newVal.metadata || '[]')
    const answerdataBak = []
    metaData.value.forEach((item) => {
      const titlePoint = item.point
      const title = item.title
      // 找到title里面titlePoint（一个字）, 把这个字标记红色
      const titleArr = title.split('')
      const titleArr2 = titleArr.map((item) => {
        if (item === titlePoint) {
          return `<span style="color: red;">${item}</span>`
        }
        return item
      })
      item.title = titleArr2.join('')
      const leng = item.leng
      const aDataBak = []
      for (let i = 0; i < leng; i++) {
        aDataBak.push({
          shengmu: '',
          yunmu: '',
          shengdiao: '',
        })
      }
      answerdataBak.push({
        id: item.id,
        data: aDataBak,
      })
    })
    answerdata.value = answerdataBak
    console.log(answerdata.value, '--4answerdata.value-')
  },
  { immediate: true },
)

watch(
  () => props.historyData,
  (newVal) => {
    if (newVal.length > 0) {
      answerdata.value = newVal
    }
  },
  { immediate: true },
)

const handleAnswer = (item, index, cidx) => {
  currentAId.value = index
  currentACId.value = cidx
  shengmuList.value = item.shengmu.split(',').map((item) => item.replace(/'/g, ''))
  yunmuList.value = item.yunmu.split(',').map((item) => item.replace(/'/g, ''))
  show.value = true
}
</script>

<style scoped lang="scss">
.q-type {
  display: flex;
  flex-direction: column;
  position: relative;
  .q-child {
    .title {
      margin: 10px 0;
      font-size: 20px;
    }
    .a-list {
      display: flex;
      flex-wrap: wrap;
      .a-card {
        width: 100px;
        height: 50px;
        border-radius: 4px;
        background: #f0f0f0;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .a-card-text {
          font-size: 14px;
          color: #4781e2;
        }
      }
    }
  }
}
.container-a {
  padding: 20px 10px 40px;
  .label {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }
  .list {
    display: flex;

    .item {
      width: 60px;
      height: 60px;
      border-radius: 4px;
      margin-right: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      background-color: #8bd989;
      border: 1px solid #f0f0f0;
      color: #ffffff;
    }
    .item-v {
      width: 44px;
      height: 44px;
      border-radius: 4px;
      margin-right: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      background-color: #8bd989;
      border: 1px solid #f0f0f0;
      color: #ffffff;
      .img1 {
        width: 9px;
      }
      .img2 {
        width: 30px;
      }
    }
    .item-active {
      background-color: #f79d00;
    }
  }
}
</style>
