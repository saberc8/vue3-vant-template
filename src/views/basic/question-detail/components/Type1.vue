<template>
  <div class="type-1">
    <div class="content" v-for="(item, index) in content" :key="index">
      <div class="qqyq-5-row-item" v-for="(childItem, childIndex) in item" :key="childItem">
        <div
          class="qqyq-5-row-item__point py"
          :class="selectedList.includes(point) ? 'selected' : ''"
          v-for="(point, index) in arr(childItem)"
          :key="point"
          :data-key="point"
          @click="selected(point)"
        >
          {{ point }}
        </div>
      </div>
    </div>

    <div class="type-1-question">
      <div class="meta-data" v-for="(item, index) in metaData" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="select-list" v-if="item.type === 'selectPoint' && item.write == false">
          <div v-for="(item, index) in selectedList" :key="index">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import labelComponent from './labelComponent.vue'
// import selectPointComponent from './selectPointComponent.vue'
import { showDialog } from 'vant'
const emit = defineEmits(['callback'])
const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
  qid: {
    type: String,
    default: '',
  },
  item: {
    type: Object,
    default: () => ({}),
  },
  historyData: {
    type: Object || String,
    default: () => '',
  },
})

const canSelect = ref(false)
const selectedList = ref([])
const maxLength = ref(20)
const content = ref([])
const metaData = ref([])

watch(
  () => props.item,
  (newVal) => {
    content.value = JSON.parse(newVal.content || '[]')
    metaData.value = JSON.parse(newVal.metadata || '[]')
    metaData.value.forEach((item) => {
      item.title = item.title.replace(/\$\{(.+?)\}/g, '$1')
    })
  },
  { immediate: true },
)

watch(
  () => props.historyData,
  (newVal) => {
    console.log(newVal, '--history--1111-')
    if (typeof newVal === 'string' && newVal !== '') {
      selectedList.value = newVal.split(',')
    }
  },
  { immediate: true },
)

const selected = (e) => {
  const value = e
  const findIndex = selectedList.value.findIndex((item) => item === value)
  if (findIndex !== -1) {
    const newSelectedList = [...selectedList.value]
    newSelectedList.splice(findIndex, 1)
    selectedList.value = newSelectedList
  } else {
    if (selectedList.value.length >= maxLength.value) {
      showDialog({
        title: '提示',
        message: `选择内容已经达到「${maxLength.value}」个，已无法选择更多的!`,
      })
      return false
    }
    selectedList.value.push(value)
    emit('callback', props.qid, selectedList.value.join(','))
  }
}

const arr = (str) => str.split('')
</script>

<style scoped lang="scss">
.type-1 {
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    .qqyq-5-row {
      display: flex;
    }

    .qqyq-5-row-item {
      display: flex;
      flex-direction: row;
      margin-right: 10px;
      .qqyq-5-row-item__point {
        display: flex;
        justify-content: center;
        align-items: center;
        &.selected {
          color: red;
          border-color: red;
        }
      }
      .py {
        font-family:
          py1,
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          Oxygen,
          Ubuntu,
          Cantarell,
          'Open Sans',
          'Helvetica Neue',
          sans-serif;
        font-size: 22px;
        padding-bottom: 4px;
      }
    }
  }
  .type-1-question {
    .meta-data {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      font-size: 18px;
      .select-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 10px 0;
        div {
          margin-right: 10px;
          margin-bottom: 10px;
          padding: 5px 10px;
          border: 1px solid #005eeb;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
