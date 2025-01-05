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

app.directive('value-size', {
    beforeMount:(el,binding) =>{
        let size = 18;
        switch(binding.arg){
            case 'sm':
                size = 12;
                break;
                case 'md':
                size = 18;
                break;
            case 'lg':
                size = 24;
                break;
            case 'xl':
                size = 40;
                break;
                case 'xxl':
                size = 72;
                break;
        }
        el.style.fontSize = size + 'px';
    },
})

app.mount('#app')
