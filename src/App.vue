<script setup lang="ts">
import { ref, provide, defineAsyncComponent } from 'vue'
import MainPage from '../src/components/mainPage.vue';
import UserTodo from '../src/components/userTodo.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import loading from './components/loading.vue';
import rejcom from './components/rejcom.vue';
import Typic from '../package/ty-pic/typic.vue';
import TyTodo from '../package/ty-todo/tyTodo.vue';
import tyPuzzle from '../package/ty-2048/typuzzle.vue'
import vividText from '../package/ty-vividtext/vividText.vue'
const imgs = [
  '/02.jpg',
  '/03.jpg',
  '/06.jpg',
  '/08.jpg',
  '/09.jpg',
  '/11.jpg',
  '/12.jpg',
  '/14.jpg',
  '/15.jpg',
  '/18.jpg',
  '/20.jpg',
  '/21.jpg',
  '/22.jpg',
  '/23.jpg'
]
const ascomp = defineAsyncComponent({

  loader: () => import('./components/asycom.vue'),

  loadingComponent: loading,

  errorComponent: rejcom,

  delay: 200,

  timeout: 3000,
  //是否可挂起
  suspensible: false,

  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      // 请求发生错误时重试，最多可尝试 3 次
      retry()
    } else {
      // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
      // 必须调用其中一个才能继续错误处理。
      fail()
    }
  }
})
let am = ref('hello world')
const sayI = function () {
  am.value = 'joker'
  direction.value = 'left'
}
let direction = ref('right')
let pinPadding = ref(200)
provide('a', 'ssss')
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <MainPage :msg=am></MainPage>
  <UserTodo v-on:welcome="sayI"></UserTodo>
  <input v-model="am" v-pin:[direction]="pinPadding">
  <input type="range" min="0" max="500" v-model="pinPadding">
  <ascomp>
    <template #top>
      <h3>this is top</h3>
    </template>
    <template #bottom>
      <h3>this is bottom</h3>
    </template>
  </ascomp>
  <div v-cloak>
    nothing
  </div>
  <Typic :url="imgs"></Typic>
  <TyTodo :todos="['a', 'b']"></TyTodo>
  <tyPuzzle></tyPuzzle>
  <vividText></vividText>
</template>

<style>
[v-cloak] {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
