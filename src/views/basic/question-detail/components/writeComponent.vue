<template>
  <div class="write-box" @click.stop="clickStop">
    <div :class="'write-box-body ' + type">
      <div class="write-box-item">
        <div class="tzg">
          <div class="tzg-box">
            <div class="tzg-v"></div>
            <div class="tzg-h"></div>
          </div>
          <canvas
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 999"
            :disable-scroll="true"
            @touchstart="touchstart"
            @touchmove="touchmove"
            @touchend="touchend"
            :canvas-id="id"
          ></canvas>
        </div>
      </div>
      <div class="write-box-button" @click="clear">重写</div>
      <div class="write-box-action">
        <div class="write-box-ok" @click="ok">确定</div>
        <div class="write-box-cancel" @click="cancel">关闭</div>
      </div>
    </div>
  </div>
</template>

<script>
let touchs = []
export default {
  name: 'writer',
  props: {
    type: {
      type: String,
      default: 'ziti', // ziti --字体 | pinyin -- 拼音
    },
  },
  data() {
    return {
      ctx: null,
      id: 'canvas-writer',
    }
  },
  mounted() {
    this.ctx = uni.createCanvasContext(this.id, this)
    this.ctx.setStrokeStyle('#333')
    //设置线的宽度
    this.ctx.setLineWidth(4)
    //设置线两端端点样式更加圆润
    this.ctx.setLineCap('round')
    //设置两条线连接处更加圆润
    this.ctx.setLineJoin('round')
  },
  methods: {
    clickStop(e) {
      e.stopPropagation()
    },
    touchstart(e) {
      let point = {
        x: e.changedTouches[0].x,
        y: e.changedTouches[0].y,
      }
      touchs.push(point)
    },
    touchmove(e) {
      let point = {
        x: e.touches[0].x,
        y: e.touches[0].y,
      }
      touchs.push(point)
      if (touchs.length >= 2) {
        this.draw(touchs)
      }
    },
    touchend(e) {
      for (let i = 0; i < touchs.length; i++) {
        touchs.pop()
      }
    },
    draw(touchs) {
      let point1 = touchs[0]
      let point2 = touchs[1]
      touchs.shift()
      this.ctx.moveTo(point1.x, point1.y)
      this.ctx.lineTo(point2.x, point2.y)
      this.ctx.stroke()
      this.ctx.draw(true)
    },
    clear() {
      this.ctx.clearRect(0, 0, 750, 700)
      this.ctx.draw(true)
    },
    // upload({
    // 	filePath: filePaths[index],
    // 	name: 'file',
    // 	formData: {
    // 		biz: 'answer'
    // 	},
    // 	success(res) {
    // 		const result = JSON.parse(res.data);
    // 		if (result.success) {
    // 			const f = [...files].concat(result.message);
    // 			self.uploadFile(filePaths, index + 1, f, qItemId);
    // 		} else {
    // 			uni.showToast({
    // 				icon: 'error',
    // 				title: '上传失败！'
    // 			});
    // 		}
    // 	}
    // });
    ok() {
      const cvsId = this.id
      const self = this
      uni.canvasToTempFilePath(
        {
          // x: 0,
          // y: 0,
          // width: 225,
          // height: 225,
          // destWidth: 200,
          // destHeight: 200,
          canvasId: cvsId,
          fileType: 'png',
          success: function (res) {
            //打印图片路径
            self.$emit('success', res.tempFilePath)
          },
        },
        this,
      )
    },
    cancel() {
      this.clear()
      this.$emit('close')
    },
  },
}
</script>

<style scoped lang="scss">
.write-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 30rpx;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.write-box-body {
  width: 100%;
  max-width: 500rpx;
  display: flex;
  flex-direction: column;
  padding: 30rpx;
  border-radius: 6rpx;
  background-color: #fff;

  &.pinyin {
    .write-box-item {
      padding-top: 83%;
    }
    .tzg-v {
      top: 33%;
      left: 0;
    }

    .tzg-h {
      width: 100%;
      height: 0;
      top: 66%;
      left: 0;
      border: none;
      border-top: 2px dashed red;
    }
  }
}

.write-box-item {
  width: 100%;
  padding-top: 100%;
  background-color: rgba(0, 0, 0, 0.04);
  margin-bottom: 30rpx;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tzg {
  width: 90%;
  height: 90%;
  border: 2px solid red;
  position: absolute;
  top: 5%;
  left: 5%;
}

.tzg-box {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.tzg-v {
  width: 100%;
  height: 0;
  border-top: 2px dashed red;
  position: absolute;
  top: 50%;
  left: 0;
}

.tzg-h {
  width: 0;
  height: 100%;
  border-left: 2px dashed red;
  position: absolute;
  top: 0;
  left: 50%;
}

.write-box-button {
  padding: 10rpx;
  color: #fff;
  background-color: #4781e2;
  border-radius: 6rpx;
  text-align: center;
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 30rpx;
}

.write-box-action {
  display: flex;
  flex-direction: row;

  .write-box-ok,
  .write-box-cancel {
    flex: 1;
    padding: 10rpx;
    color: #fff;
    background-color: #fff;
    border: 1px solid #4781e2;
    border-radius: 6rpx;
    text-align: center;
    font-size: 32rpx;
    font-weight: bold;
    color: #4781e2;
  }

  .write-box-ok {
    margin-right: 30rpx;
    background-color: #4781e2;
    color: #fff;
  }
}
</style>
