<script>
import  picprop from './type'
export default{
    name:'typic',
    props:picprop
    
}
</script>
<template>
    <div v-for="(item,index) in url" :key="index">
      {{item}}
    </div>
</template>