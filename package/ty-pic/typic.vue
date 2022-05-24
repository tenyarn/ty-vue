<script>
import {picprop} from './type'
export default {

    props:picprop,
    data() {
      return {
        nowpic:0
      }
    },
    mounted() {
      setInterval(()=>{
        this.nowpic>=this.url.length-1 ? this.nowpic=0 : this.nowpic++ 
        
      },2000)
    },
}
</script>
<template>
<div id="picblock">
 <div style="margin-left:50px ;">
<transition-group name="pics">
			<div v-for="(item,index) in url" :key="index" class="innerimg" v-show="index==nowpic">	
      <img  :src="item" >
      </div>
	</transition-group>
  </div>
</div>
</template>
<style scoped>
img{
  width: 100px;
  height: auto;
  
}
#picblock{
  display: inline-block;
  width: 200px;
  height: 200px;

}
.innerimg{
  position:absolute;
}
.pics-enter-active, .pics-leave-active {
  transition: all 1.5s;
}
.pics-enter-from{
opacity: 0;
	transform: translateX(-100%);
}
.pics-enter-to{
	opacity: 1;
transform: translateX(0);
}
.pics-leave-active /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
transform: translateX(100%);
}
</style>