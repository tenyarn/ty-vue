<script setup lang="ts">
import { ref , provide , defineAsyncComponent } from 'vue'
import MainPage from '../src/components/mainPage.vue';
import  UserTodo  from '../src/components/userTodo.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import loading from './components/loading.vue';
import rejcom from './components/rejcom.vue';
const ascomp = defineAsyncComponent({

  loader:()=>import ('./components/asycom.vue'),

  loadingComponent:loading,

  errorComponent:rejcom,

  delay:200,

  timeout:3000,
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
const sayI = function(){
  am.value = 'joker'
  direction.value = 'left'
}
let direction = ref('right')
let pinPadding = ref(200)
provide('a','ssss')
const objs = [
    { pro: "山东", ci: '临沂', town: '临沭' },
    { pro: "北京", ci: '海淀', town: 'ee' },
    { pro: "上海", ci: '浦东', town: 'xx' },
    { pro: "广东", ci: '广州', town: 'ss' },
    { pro: "山东", ci: '济南', town: '高新' },
    { pro: "广东", ci: '厦门', town: 'zz' },
    { pro: "北京", ci: '朝阳', town: 'yy' },
    { pro: "山东", ci: '济南', town: '历下' },
]
const chobj = objs.sort((a,b):number=>{
    if(a.pro!==b.pro){
        return a.pro<b.pro ? -1 : 1
    }else{
        if(a.ci!==b.ci){
            return a.ci<b.ci ? -1 : 1
        }else{
            return a.town<b.town ? -1 : 1
        }
    }
})
console.log(chobj)
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
