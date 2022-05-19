import  typic  from "./ty-pic/typic.vue";
const coms = [typic]
const install = function(Vue){
    coms.forEach(com => {
        Vue.component(com.name,com)
    });
}
export default install