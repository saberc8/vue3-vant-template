<template>
  <div class="camera-box" @click.stop="clickStop">
    <div class="camera-box-body">
      <div class="camera-box-item">
        <div class="tzg">
          <camera
            device-position="back"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
          ></camera>
          <cover-view class="tzg-box">
            <div class="tzg-v"></div>
            <div class="tzg-h"></div>
          </cover-view>
        </div>
      </div>
      <div class="camera-box-button" @click="takePohoto">拍照</div>
      <div class="camera-box-action">
        <div class="camera-box-ok" @click="ok">确定</div>
        <div class="camera-box-cancel" @click="cancel">关闭</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'camera',
  data() {
    return {}
  },
  methods: {
    clickStop(e) {
      e.stopPropagation()
    },
    takePohoto() {
      const ctx = uni.createCameraContext()
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          this.src = res.tempImagePath
          console.log(res)
        },
      })
    },
    ok() {},
    cancel() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped lang="scss">
.camera-box {
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
.camera-box-body {
  width: 100%;
  max-width: 500rpx;
  display: flex;
  flex-direction: column;
  padding: 30rpx;
  border-radius: 6rpx;
  background-color: #fff;
}
.camera-box-item {
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
.camera-box-button {
  padding: 10rpx;
  color: #fff;
  background-color: #4781e2;
  border-radius: 6rpx;
  text-align: center;
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 30rpx;
}
.camera-box-action {
  display: flex;
  flex-direction: row;
  .camera-box-ok,
  .camera-box-cancel {
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
  .camera-box-ok {
    margin-right: 30rpx;
    background-color: #4781e2;
    color: #fff;
  }
}
</style>
