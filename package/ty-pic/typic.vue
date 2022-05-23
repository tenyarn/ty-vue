<script>
import {picprop} from './type'
export default {

    props:picprop
    
}
</script>
<template>
    <div v-for="(item,index) in url" :key="index">
      {{item}}
    </div>
</template>