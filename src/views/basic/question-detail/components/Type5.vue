<template>
  <div class="q-type">
    <div class="q-child">
      <div v-for="(item, index) in metaData">
        <div class="title" v-html="item.title"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

const metaData = ref([])
const content = ref('')
watch(
  () => props.item,
  (newVal) => {
    console.log(newVal, '--5555-');
    metaData.value = JSON.parse(newVal.metadata || '[]')
    console.log(metaData.value, '--55555-');
  },
  { immediate: true },
)
</script>

<style scoped lang="scss">
.q-type {
  display: flex;
  flex-direction: column;
  .title {
    margin: 10px 0;
    font-size: 20px;
  }
}
</style>
