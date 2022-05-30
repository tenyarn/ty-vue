<script>

    export default{
        data(){
            return {
                text:'',
                textcopy:'',
                timer:''
            }
        },
        computed:{
            
        },
        watch:{
            text(){
                let i = 0
                if(this.timer){
                    clearInterval(this.timer)
                }
                this.timer = setInterval(()=>{
                    if(i>this.text.length-1){
                        i = 0
                    }else{
                        i++
                    }     
                    this.textcopy=this.text.substring(0,i)
                },500)
                
            }
        }
    }
</script>
<template>
<input type="text" v-model="text">
<input type="text" v-model="textcopy">
</template>