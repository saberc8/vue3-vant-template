<template>
  <div>
    <div class="h1">
      <text v-for="(t, index) in titleList" :key="index" :class="t.type">{{ t.text }}</text>
    </div>
    <div class="selectPoint-result">
      <div class="select-point-write"
        ><PointFont
          v-for="(item, index) in imageList"
          :key="index"
          :value="imageList[index]"
          :index="index"
          @success="success"
      /></div>
    </div>
  </div>
</template>

<script>
import PointFont from '@/pages/home/modules/pointFont.vue'
import { errorFontBuild } from '@/utils/utils.js'
export default {
  name: 'errorCodeComponent',
  components: {
    PointFont,
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
    title: {
      type: String,
      default: '',
    },
  },
  watch: {
    title(n) {
      this.init(n)
    },
  },
  data() {
    return {
      titleList: [],
      imageList: [],
    }
  },
  mounted() {
    this.imageList = Array(this.item.leng).fill('')
    this.init(this.title)
  },
  methods: {
    init(n) {
      this.titleList = errorFontBuild(n)
    },
    success(path, i) {
      const imgs = [...this.imageList]
      imgs[i] = path
      this.imageList = imgs
      if (this.item.id) {
        this.$emit('success', this.item.id, imgs)
      } else {
        console.log('组件缺失ID，无法存储')
      }
      this.$forceUpdate()
    },
  },
}
</script>

<style scoped lang="scss">
.h1 {
  font-weight: bold;
  padding: 20rpx 0;
}
.ck {
  font-family: 'ck', 'ck2', 'kt';
}
</style>
