<template>
  <div class="h1">{{ title }}</div>
</template>

<script>
export default {
  name: 'labelComponent',
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
  mounted() {},
}
</script>

<style scoped lang="scss">
.h1 {
  font-weight: bold;
  padding: 20rpx 0;
}
</style>
