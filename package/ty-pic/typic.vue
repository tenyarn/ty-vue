<script>
export default{
    name:'typic',
    props:{
        url:[]
    },
    
}
</script>
<template>
    <div v-for="(item,index) in url" :key="index">
      {{item}}
    </div>
</template>