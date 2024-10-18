<template>
  <div class="select-point-box">
    <div class="h1" v-if="title.indexOf('${') == -1">{{ title }}</div>
    <div class="h1" v-else>
      <text :class="font.type" v-for="(font, index) in errorFontBuild(title)" :key="index">{{
        font.text
      }}</text>
    </div>
    <div class="selectPoint-result">
      <div class="select-point-write" v-if="item.write == true">
        <PointFont
          :type="type"
          v-for="(item, index) in imageList"
          :total="item.leng"
          :key="index"
          :value="imageList[index]"
          :index="index"
          @success="success"
        />
      </div>
      <div v-else class="select-point-selected" :class="selectedList.length > 0 ? 'border' : ''">
        {{ selectedList.join(' , ') }}
      </div>
    </div>
  </div>
</template>

<script>
import PointFont from './pointFont.vue'
import { errorFontBuild } from '@/utils/utils.js'
export default {
  name: 'selectPointComponent',
  components: {
    PointFont,
  },
  props: {
    type: {
      type: String,
      default: 'ziti', // ziti --字体 | pinyin -- 拼音
    },
    index: {
      type: Number,
      default: 0,
    },
    item: {
      type: Object,
      default() {
        return {}
      },
    },
    selectedList: {
      type: Array,
      default() {
        return []
      },
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      imageList: [],
    }
  },
  watch: {
    selectedList(a) {
      this.$emit('success', this.item.id, a)
    },
  },
  mounted() {
    if (this.item.write) {
      this.imageList = Array(this.item.leng).fill('')
    } else {
      this.$emit('callback', true, this.item.leng)
    }
  },
  methods: {
    errorFontBuild,
    success(path, i) {
      const paths = [...this.imageList]
      paths[i] = path
      this.imageList = paths
      if (this.item.id) {
        this.$emit('success', this.item.id, paths)
      } else {
        console.log('组件缺失ID，无法存储')
      }
      this.$forceUpdate()
    },
  },
}
</script>

<style scoped lang="scss">
.select-point-box {
  margin-bottom: 40rpx;
}

.select-point-write {
  padding-top: 20rpx;
}

.select-point-selected {
  min-height: 30rpx;
  background-color: #f9f9f9;
  padding: 4rpx;
  border: 1px solid #f9f9f9;
  line-height: 1.5;

  .border {
    border-color: #333;
  }
}
</style>
