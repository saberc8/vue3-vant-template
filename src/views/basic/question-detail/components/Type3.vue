<template>
  <div class="q-type">
    <div class="q-child">
      <div v-for="(item, index) in metaData">
        <div class="title ck">
          <div
            :class="{ red: chooseValue[index] === citem }"
            v-for="(citem, cidx) in item.title"
            @click="choose(citem, index)"
            >{{ citem }}</div
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showDialog } from 'vant'
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
    type: Object || String,
    default: () => '',
  },
})

const metaData = ref([])
const chooseValue = ref([])
watch(
  () => props.item,
  (newVal) => {
    console.log(newVal, '--3333333-')
    metaData.value = JSON.parse(newVal.metadata || '[]')
    console.log(metaData.value, '--133333331-')
    metaData.value.forEach((item) => {
      item.title = item.title.replace(/\$\{(.+?)\}/g, '$1')
    })
  },
  { immediate: true },
)

watch(
  () => props.historyData,
  (newVal) => {
    console.log(newVal, '--history--3333-')
    chooseValue.value = newVal
  },
  { immediate: true },
)
const choose = (e, index) => {
  console.log(e, '--3333333-')
  chooseValue.value[index] = e
  emit('callback', props.qid, chooseValue.value)
}
</script>

<style scoped lang="scss">
.q-type {
  display: flex;
  flex-direction: column;
  .title {
    margin: 10px 0;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .ck {
    font-family: 'ck', 'ck2', 'kt';
  }
  .red {
    color: red;
  }
}
</style>
