import  typic  from "./ty-pic/typic.vue";
import tyTodo from './ty-todo/tyTodo.vue'
import { App } from 'vue'
const coms = [typic, tyTodo]
const install = function(Vue:App){
    coms.forEach(com => {
        Vue.component(com.name,com)
    });
}
export default install