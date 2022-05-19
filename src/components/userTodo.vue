<script setup lang="ts">
import { onMounted ,inject,ref,nextTick, reactive } from 'vue';
import MainPage from './mainPage.vue';
const emits = defineEmits(['welcome'])
const cb = function(){
    emits('welcome')
    theme.color='blue'
}
const nowthis = ()=> console.log(this)
const theme = reactive({
    color:'red',
    width:'30px',
})
let message = ref('yyyyy')
const changeMessage = async (newMessage:any) => {
    setTimeout(() => {
        message.value = newMessage
    }, 5000);
      await nextTick()
      console.log('Now DOM is updated')
    }
const a = inject('a')
</script>
<template>
<div>
    <MainPage msg="haha"></MainPage>
    <button @click="cb" class="bu">cb</button>
    <div @click="nowthis">this:{{a}}</div>
    <div @click="changeMessage('zzzzz')">{{message}}</div>
</div>
</template>
<style>
.bu{
    background-color: v-bind('theme.color');
    width: v-bind('theme.width');
}
</style>