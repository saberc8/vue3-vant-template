<template>
  <div class="app-page-dashboard">
    <van-skeleton title :row="3" :loading="showSkeleton" />
    <van-list v-if="!showSkeleton" @load="onLoad">
      <div class="qlist-item" v-for="(item, index) in questionList" :key="index">
        <div class="header">
          <div class="qlist-item-title">
            {{ item.title }}
          </div>
          <div
            class="tag"
            :style="
              item.status === 0
                ? { backgroundColor: '#ff976a' }
                : item.status === 1
                  ? { backgroundColor: '#07c160' }
                  : item.status === 2
                    ? { backgroundColor: '#7232dd' }
                    : { backgroundColor: '#909399' }
            "
            >{{ item.status_dictText }}</div
          >
        </div>
        <div class="description">{{ item.description }}</div>
        <div class="footer-btn">
          <div class="btn-1">下载答题纸</div>
          <div class="btn-2" @click="goDetail(item.qid)">答题</div>
        </div>
      </div>
    </van-list>
    <div
      class="empty"
      v-if="total > (params.pageNo - 1) * params.pageSize && total < params.pageNo * params.pageSize"
      >到底了</div
    >
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'home',
})
import { useRouter } from 'vue-router'
import { getMyQuestions } from '@/api/question'
const router = useRouter()
const showSkeleton = ref(true)
const params = reactive({
  pageNo: 1,
  pageSize: 40,
})
const questionList = ref([])
const total = ref(0)
const getQuestions = async (params) => {
  showSkeleton.value = true
  const res = await getMyQuestions(params)
  showSkeleton.value = false
  console.log(res)
  questionList.value = questionList.value.concat(res.records)
  console.log(questionList.value, '---')
  total.value = res.total
}

const goDetail = (id) => {
  console.log(id)
  router.push({ name: 'question-detail', params: { id } })
}
getQuestions(params)
const onLoad = () => {
  console.log('load');
  if (total.value <= params.pageNo * params.pageSize) {
    return
  }
  params.pageNo++
  console.log(params)
  getQuestions(params)
}
</script>

<style lang="scss" scoped>
.app-page-dashboard {
  background-color: #f7f8f9;
  margin-top: 10px;
  padding-bottom: 50px;
  .van-skeleton {
    margin: 16px;
  }
  .van-list {
    margin: 0;
  }
  .qlist-item {
    padding: 16px;
    background-color: #fff;
    margin: 0 16px 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    .header {
      display: flex;
      justify-content: space-between;
      .qlist-item-title {
        font-size: 22px;
        font-weight: bold;
        flex: 1;
      }
      .tag {
        color: #fff;
        background-color: #ff976a;
        border-radius: 4px;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
      }
    }
    .description {
      margin-top: 8px;
      color: #606266;
      font-size: 14px;
    }
    .footer-btn {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      .btn-1 {
        padding: 10px;
        background-color: #4781e2;
        border-radius: 4px;
        color: #fff;
      }
      .btn-2 {
        padding: 10px;
        background-color: #4781e2;
        border-radius: 4px;
        color: #fff;
      }
    }
  }
  .empty {
    color: #606266;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
