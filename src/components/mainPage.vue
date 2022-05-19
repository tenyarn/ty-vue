<script setup lang="ts">
import { initTodo }  from './todoData'
import  { use }  from './todoData'
import { ref } from 'vue'
const props = defineProps({
    msg:String
})
let uses = ref(use)
</script>
<template>
<div> {{msg}}{{uses}}</div>
<button @click="initTodo">req</button>
</template>
<style>
</style>