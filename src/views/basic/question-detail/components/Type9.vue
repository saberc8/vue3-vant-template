<template>
  <div class="type-9">
    <div v-html="content"></div>
    <div class="meta-data">
      <div class="title" v-for="(item, index) in metaData" :key="index">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showDialog } from "vant";

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
});

const content = ref("");
const formattedContent = ref("");
const metaData = ref([]);
watch(
  () => props.item,
  (newVal) => {
    console.log(newVal, "--888888-");
    content.value = newVal.content;
    console.log(content.value, "--2222-");
    metaData.value = JSON.parse(newVal.metadata || "[]");
  },
  { immediate: true }
);
</script>

<style lang="scss">
.type-9 {
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
h1 {
  font-size: 21px;
  margin-bottom: 8px;
  text-align: center;
  margin-bottom: 10px;
}
.ld-title {
  font-size: 21px;
  margin-bottom: 8px;
  text-align: center;
  margin-bottom: 10px;
}

.ld-p {
  text-indent: 30px;
  line-height: 1.5;
  margin-bottom: 5px;
}

.ld-p-sub {
  line-height: 2;
  font-size: 14px;
  text-align: right;
}
</style>
