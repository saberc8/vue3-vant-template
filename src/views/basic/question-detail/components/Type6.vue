<template>
  <div class="q-type">
    <div class="q-child">
      <div class="content" v-html="formattedContent"></div>

      <div class="title ck">{{ metaData[0].title }}</div>
      <audio :src="metaData[0].src" controls></audio>
      <van-cell-group class="textarea" inset>
        <van-field
          v-model="value"
          rows="1"
          autosize
          type="textarea"
          placeholder="请输入"
          @blur="onBlur"
        />
      </van-cell-group>
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
    type: String,
    default: () => '',
  },
})

const metaData = ref([])
const content = ref('')
const formattedContent = ref('')
const value = ref('')
watch(
  () => props.item,
  (newVal) => {
    metaData.value = JSON.parse(newVal.metadata || '[]')
    metaData.value.forEach((item) => {
      item.title = item.title.replace(/\$\{(.+?)\}/g, '$1')
    })
    console.log(metaData.value, '--6666-')
    content.value = newVal.content
    content.value = content.value.replace(/\\n/g, '<br>')
    formattedContent.value = content.value
      .split('\n')
      .map((line) => `<div>${line}</div>`)
      .join('')
  },
  { immediate: true },
)
watch(
  () => props.historyData,
  (newVal) => {
    console.log(newVal, '--history--1111-')
    value.value = newVal
  },
  { immediate: true },
)
const onBlur = () => {
  console.log(value.value, '--value--')
  emit('callback', props.qid, value.value)
}
</script>

<style scoped lang="scss">
.q-type {
  display: flex;
  flex-direction: column;
  .q-child {
    display: flex;
    flex-direction: column;
    .content {
      font-size: 18px;
      word-break: break-all;
    }
    .textarea {
      margin: 10px 0;
      background-color: rgb(160, 160, 160);
    }
  }
  .title {
    margin: 10px 0;
    font-size: 20px;
  }
  .ck {
    font-family: 'ck', 'ck2', 'kt';
  }
}
</style>
