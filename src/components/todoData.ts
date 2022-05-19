import { UserTodo } from "./type"
import { ref , reactive } from "vue"
import { request } from "../api/request"
import { watchEffect } from "vue"

const user:UserTodo = reactive({
    name:'',
    title:'',
    content:'',
    done:false,
})

let use = ref(false)

const gettodo = function (){
    return use
}

const initTodo = function (){
    let res = request('inittodo')
    res?.then(
        (res)=>{
            return res.json()
        })
        .then(
        (data)=>{
            console.log(data)
            use = data
        })
        .catch(
        (err)=>{
            console.log(err)
        })
}
export {
    gettodo,
    initTodo,
    use
}
