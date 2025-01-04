import './assets/css/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('font-size', {
    beforeMount: (el, binding) =>{
        el.style.fontSize = '30px';
        el.style.color = 'red';
    },
})

app.directive('custom-size', {
    beforeMount: (el, binding) =>{
        el.style.fontSize = binding.value + 'px';
    },
})

app.mount('#app')
