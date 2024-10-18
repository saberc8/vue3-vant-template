<template>
  <div class="type-8">
    <div v-html="content" @click="handleContentClick"></div>
    <div class="meta-data">
      <div class="title" v-for="(item, index) in metaData" :key="index">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showDialog } from 'vant'

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
})

const content = ref('')
const formattedContent = ref('')
const metaData = ref([])
const answerdata = ref([])
watch(
  () => props.item,
  (newVal) => {
    console.log(newVal, '--888888-')
    content.value = newVal.content
    console.log(content.value, '--2222-')
    metaData.value = JSON.parse(newVal.metadata || '[]')
    metaData.value.forEach((item) => {
      answerdata.value.push({
        title: item.title,
        answer: '',
      })
    })
  },
  { immediate: true },
)

const handleContentClick = (event) => {
  const selection = window.getSelection()
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0)
    const char = range.toString()
    const index = range.startOffset
    console.log(`Character clicked: ${char} at index ${index}`)
    // 把这个字标红
  }
}
</script>

<style lang="scss">
.type-8 {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  word-break: break-all;
  .meta-data {
    margin-top: 20px;
    .title {
      margin: 10px 0;
      font-size: 20px;
    }
  }
}
.zh-title {
  font-size: 21px;
  margin-bottom: 8px;
  text-align: center;
  margin-bottom: 10px;
}
.zh-p {
  text-indent: 30px;
  line-height: 1.5;
  margin-bottom: 5px;
}
</style>
