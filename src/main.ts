import './assets/css/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('font-size', {
    beforeMount: (el, binding) =>{
        el.style.fontSize = binding.value + 'px';
        el.style.color = 'red';
    },
})



app.mount('#app')
