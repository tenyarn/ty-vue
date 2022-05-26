
<script lang="ts">
import { ref,reactive,watchEffect,computed } from 'vue'
import { todoprop } from './type'
export default{
    name:'tyTodo',
    props:todoprop,
    setup(props){
        const todos = reactive(props.todos)
        let todo = ref('')
        const addtodo = function (){
            if(todo.value){
                todos.push(todo.value)
            }
            todo.value=''
        }
        const deletetodo = function (i){
            todos.splice(i,1)
            checkarr.splice(i,1)
        }
        
        let flag = ref(-1)
      
        const check = function(i){
            flag = i
            checkarr[i]=!checkarr[i]
        }
        let checkarr = reactive(todos.map(()=>false))
        watchEffect(()=>{
            
            todos.length > checkarr.length ? checkarr.push(false) : ''
        })
        return{
            todos,
            todo,
            addtodo,
            deletetodo,
            check,
            checkarr,
        }
    }
}

</script>
<template>
<div style="width: 80%;height:250px;display:inline-flex;flex-direction: column;align-items: center;background-color: aliceblue;">
<div style="display: inline-flex;height: 50px;inline-size: 50px;width: 60%;align-items: center;justify-content: center;">
    <div style="color:skyblue;padding: 10px 0;">how to do ?</div>
    <input type="text" v-model="todo" @keyup.enter="addtodo">
</div>
<div style="overflow-y: auto;width: 60%;height: 200px;display:inline-flex;flex-direction: column;">
    <div v-for="(item,index) in todos" :key="index" style="display:inline-flex ;margin-bottom: 10px;">
       <input type="checkbox" @change="check(index)">
        <label style="width: 100%;" :class="{ completed:checkarr[index]}">{{item}}</label>
        <div style="width:100% ;"></div>
        <button @click="deletetodo(index)" :itemflag="index">x</button>
    </div>
</div>

</div>
    
</template>
<style>
.completed{
    text-decoration: line-through;
}
</style>