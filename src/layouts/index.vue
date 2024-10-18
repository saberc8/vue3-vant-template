<template>
  <div class="app-layout">
    <Header />
    <div class="app-content">
      <router-view v-slot="{ Component, route }">
      <keep-alive :include="includeRoute">
        <component v-if="!route.meta.link" :is="Component" :key="route.path" />
      </keep-alive>
    </router-view>
    </div>
    <footer class="app-wrapper__footer">
      <Tabbar />
    </footer>
  </div>
</template>
<script setup lang="ts">
import Header from './Header/index.vue'
import Tabbar from './Tabbar/index.vue'
const includeRoute = ['home', 'my']
</script>
<style lang="scss" scoped>
.app-layout {
  position: absolute;
  width: 100%;
  height: 100%;
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    z-index: 1;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  }
  .app-content {
    margin-top: 46px;
    height: calc(100vh - 30px - 32px);
    overflow: auto;
  }
}
.app-wrapper__footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
