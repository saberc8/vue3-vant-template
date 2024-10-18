<template>
  <div class="type-1">
    <div v-html="formattedContent"></div>
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
watch(
  () => props.item,
  (newVal) => {
    console.log(newVal, '--0000-');
    content.value = newVal.content
    console.log(content.value, '--2222-')
    // q: 这里有\n，怎么处理可以分行
    content.value = content.value.replace(/\\n/g, '<br>')
    formattedContent.value = content.value.split('\n').map(line => `<div>${line}</div>`).join('')
  },
  { immediate: true },
)
</script>

<style scoped lang="scss">
.type-1 {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  word-break: break-all;
}
</style>
