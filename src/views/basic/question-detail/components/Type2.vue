<template>
  <div class="qqyq-5-type">
    <div class="qqyq-5-child">
      <template v-for="(item, index) in metadata" :key="index">
       <div>index</div>
        <RadioComponent
          v-if="item.type === 'radio'"
          :item="item"
          :title="item.title"
          @radioSuccess="radioSuccess"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import RadioComponent from './radioComponent.vue'
const emit = defineEmits(['callback'])
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  qid: {
    type: String,
    default: '',
  },
  historyData: {
    type: Object || String,
    default: () => '',
  },
})
const metadata = ref([])
const answerdata = ref([])
watch(
  () => props.item,
  (newVal) => {
    metadata.value = JSON.parse(newVal.metadata || '[]')
    answerdata.value = metadata.value.map((item) => ({
      id: item.id,
      value: '',
    }))
  },
  { immediate: true },
)
watch(
  () => props.historyData,
  (newVal) => {
    console.log(newVal, '--history--3333-')
    answerdata.value = newVal
    console.log(answerdata.value, '---watchwatchwatch---')
  },
  { immediate: true },
)
const radioSuccess = (val, metadataId) => {
  console.log(val, metadataId)
  answerdata.value.forEach((item) => {
    if (item.id === metadataId) {
      item.value = val
    }
  })
  console.log(answerdata.value, '---radioSuccess---')
  emit('callback', props.qid, answerdata.value)
}
</script>

<style scoped lang="scss">
.qqyq-5-type {
}

.qqyq-5-row {
  display: flex;
  flex-direction: row;
}

.qqyq-5-row-item {
  display: flex;
  flex-direction: row;
  margin: 8rpx;
}

.qqyq-5-row-item__point {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38rpx;
  height: 38rpx;
  border: 1rpx dashed #999;
  margin-right: 1rpx;
}
</style>
