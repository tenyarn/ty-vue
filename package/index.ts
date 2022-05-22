import  typic  from "./ty-pic/typic.vue";
import { App } from 'vue'
const coms = [typic]
const install = function(Vue:App){
    coms.forEach(com => {
        Vue.component(com.name,com)
    });
}
export default install