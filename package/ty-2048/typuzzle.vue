<script>
import { reactive ,ref } from 'vue'
export default {
    name: 'tyPuzzle',
    setup() {
        const zoom = reactive([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]])
        let newflag = true
        let zero = ref(0)

        const newblock = function () {
            
            let a = parseInt(4 * Math.random())
            let b = parseInt(4 * Math.random())
            if (zoom[a][b]!=0){
   
                if(zero.value>14){
                    alert('game over')
                }else{
                    newblock()
                }
            }else{
                zero.value++
                if (Math.random() < 0.7) {
                zoom[a][b] = 2
            } else {
                zoom[a][b] = 4
            }
            }
            
        }

        const movet = function(arr){
            console.log(arr)
            let n = []
            let r = []
            arr.forEach((item)=>{
                if(item!=0){
                    n.push(item)
                }
            })
            let o = 0
            n.forEach((item)=>{
                if(item==o){
                    r.push(2*o)
                    o=0
                }else{
                    if(o==0){
                        o=item
                    }else{
                        r.push(o)
                        o=item
                    }
                    

                }
            })
            let rl = []
            for(let i=0;i<4-r.length;i++){
                rl.push(0)
            }
            console.log(rl)
            r.concat(...rl)
            console.log(r)
            debugger
            return r
        }
        const movep = function(x){
            switch(x){
                case 0 : {
                    for(let i=0;i<4;i++){
                        zoom[i]=movet(zoom[i])
                    }
                    break
                }
                case 1 : {
                    
                    break
                }
                case 2 : {
                    
                    break
                }
                case 3 : {
                    
                    break
                }
            }
        }
        const leftc = function () {
            movep(0)
            newblock()
        }
        const rightc = function () {
            movep(1)
            if (newflag) {

            } else {
                newflag = !newflag
            }
        }
        const topc = function () {
            movep(2)
            if (newflag) {

            } else {
                newflag = !newflag
            }
        }
        const bottomc = function () {
            movep(3)
            if (newflag) {

            } else {
                newflag = !newflag
            }
        }
        return {
            zoom,
            leftc,
            rightc,
            topc,
            bottomc
        }
    }

}
</script>
<template>
    <div>
        <div v-for="(itemi, index) in zoom" :key="index">
            <div v-for="(itemj, index) in itemi" :key="index"
                style="display:inline-block ;width:20px;height:20px;background-color: aqua;margin:2px">
                {{ itemj }}
            </div>

        </div>
        <button @click="topc">top</button>
        <button @click="bottomc">bottom</button>
        <button @click="leftc">left</button>
        <button @click="rightc">right</button>
    </div>
</template>