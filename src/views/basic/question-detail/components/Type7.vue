<template>
  <div class="qqyq-5-type">
    <div class="qqyq-5-child">
      <template v-for="(item, index) in metadata">
        <selectPointComponent
          v-if="item.type === 'selectPoint'"
          :title="item.title"
          :item="item"
          :key="index"
          :index="index"
          @callback="callback"
          :selectedList="selectedList"
          @success="success"
        />
      </template>
    </div>
  </div>
</template>

<script>
import selectPointComponent from './selectPointComponent.vue'
export default {
  components: {
    selectPointComponent,
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
      qid: {
    type: String,
    default: '',
  },
    },
  },
  data() {
    return {
      metadata: [],
    }
  },
  mounted() {
    this.metadata = JSON.parse(this.item.metadata || '[]')
  },
  methods: {
    success(id, values) {
      this.$emit('success', id, values, this.item)
    },
  },
}
</script>

<style scoped lang="scss"></style>
