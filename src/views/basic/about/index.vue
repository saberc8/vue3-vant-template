<template>
  <div class="app-page-about">
    <div>
      <p>这是一个基于vue3 + vite + vant3 + typescript的移动端项目</p>
    </div>
    <div>dependencies</div>
    <Tag type="primary" v-for="(item, index) in schema" class="m-1">{{ item.label }}</Tag>
    <div>devDependencies</div>
    <Tag type="primary" v-for="(item, index) in devSchema" class="m-1">{{ item.label }}</Tag>
    <div>
      {{test}}
    </div>
  </div>
</template>

<script setup lang="ts">
import pkg from '../../../../package.json'
import { Tag } from 'vant'
const test = ref('test')
const { dependencies, devDependencies, name } = pkg
console.log(dependencies, devDependencies, name)
const schema = <any>[]
const devSchema = <any>[]

Object.keys(dependencies).forEach((key) => {
  schema.push({ field: key, label: key })
})
Object.keys(devDependencies).forEach((key) => {
  devSchema.push({ field: key, label: key })
})
</script>
