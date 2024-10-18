<template>
  <div :class="'select-point-write__point ' + type" @click="selectFn">
    <div class="before"></div>
    <div class="after"></div>
    <cover-image v-if="value.length > 0" :src="value"></cover-image>
    <cameraComponent v-if="showCamera" @close="close" @success="success" />
    <writeComponent :type="type" v-if="showWrite" @close="close" @success="success" />
  </div>
</template>

<script>
import cameraComponent from './cameraComponent.vue'
import writeComponent from './writeComponent.vue'
export default {
  name: 'point-font',
  components: {
    cameraComponent,
    writeComponent,
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: 'ziti', // ziti --字体 | pinyin -- 拼音
    },
    index: {
      type: Number,
      default: 0,
    },
    value: {
      type: String,
      default: '',
    },
  },
  watch: {
    value(a) {
      console.log(a, '111')
    },
  },
  data() {
    return {
      showCamera: false,
      showWrite: false,
    }
  },
  methods: {
    success(img) {
      this.$emit('success', img, this.index)
      this.close()
    },
    close() {
      this.showCamera = false
      this.showWrite = false
    },
    selectFn() {
      const self = this
      self.showWrite = true
      return false
      uni.showActionSheet({
        title: '录入方式选择',
        itemList: ['手写', '拍照'],
        success(res) {
          const { tapIndex } = res
          if (tapIndex === 0) {
            // 手写
            self.showWrite = true
          } else if (tapIndex === 1) {
            // 拍照
            self.showCamera = true
          }
        },
      })
    },
  },
}
</script>

<style scoped lang="scss">
.select-point-write__point {
  display: inline-block;
  width: 90rpx;
  height: 90rpx;
  border: 1px solid #999;
  margin: 5px;
  position: relative;
  overflow: hidden;

  &.pinyin {
    border-left: none;
    border-right: none;
    width: 120rpx;

    .before {
      transform: none;
      top: 33%;
    }

    .after {
      transform: none;
      top: 66%;
      left: 0;
      width: 100%;
      height: 0;
      border: none;
      border-top: 1px dashed #999;
    }
  }

  .before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 0;
    transform: translateY(-50%);
    border-top: 1rpx dashed #999;
  }

  .after {
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-left: 1rpx dashed #999;
  }
}
</style>
