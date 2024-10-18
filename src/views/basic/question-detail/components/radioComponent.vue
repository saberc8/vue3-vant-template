<template>
  <div class="radio-c">
    <div class="title">{{ title }}</div>
    <van-radio-group class="item" direction="horizontal" v-model="checkValue" @change="onChange">
      <van-radio
        style="margin-top: 20px"
        v-for="item in options"
        :key="item.value"
        color="#4781e2"
        :name="item.value"
      >
        <template #default="props">
          <div v-html="item.label"></div>
        </template>
      </van-radio>
    </van-radio-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['radioSuccess'])
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  title: {
    type: String,
    default: '',
  },
  value: {
    type: [String, Number],
    default: '',
  },
})

const options = ref([])
const checkValue = ref(props.value)
const processString = (str) => {
  let processedStr = str
  const placeholders = str.match(/\$\{.*?\}/g)
  if (placeholders) {
    placeholders.forEach((placeholder) => {
      const content = placeholder.slice(2, -1)
      processedStr = processedStr.replace(
        placeholder,
        `<span style="color: red;">${content}</span>`,
      )
    })
  }
  return processedStr
}
watch(
  () => props.item,
  (newVal) => {
    options.value = props.item.options
    options.value.forEach((item) => {
      item.label = processString(item.label)
    })
  },
  { immediate: true },
)

watch(
  () => props.value,
  (newVal) => {
    console.log(newVal, '--valuevalue--');
    checkValue.value = newVal
  },
  { immediate: true },
)

const onChange = (e) => {
  console.log(e);
  emit('radioSuccess', e, props.item.id)
}
</script>

<style scoped lang="scss">
.radio-c {
  margin-bottom: 30px;
}
.title {
  font-weight: bold;
  padding: 10rpx 0;
  font-size: 18px;
}

.item {
  margin: 0px 0;
  font-size: 20px;
}
</style>
