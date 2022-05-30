<script>
export default{
    name:'tyPuzzle',
    setup(){
        const zoom = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        const leftc = function(){}
        const rightc = function(){}
        const topc = function(){}
        const bottomc = function(){}
        return {
            zoom
            }
    }

}
</script>
<template>
<div>
    <div v-for="(itemi,index) in zoom" :key="index">
        <div v-for="(itemj,index) in itemi" :key="index" style="display:inline-block ;width:20px;height:20px;background-color: aqua;margin:2px">
            {{itemj}}
        </div>
    
    </div>
</div>
</template>