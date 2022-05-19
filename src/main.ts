import { createApp } from 'vue'
import App from './App.vue'
const app=createApp(App)
app.directive('pin',{
    mounted(el,binding){
        el.style.position='fixed'
        const s = binding.arg || 'top'
        el.style[s] = binding.value + 'px'
    },
    updated(el,binding){
        el.style.position='fixed'
        const s = binding.arg || 'top'
        el.style[s] = binding.value + 'px'
    }
})
app.mount('#app')
