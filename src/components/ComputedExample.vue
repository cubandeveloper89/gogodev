<template>
    <div>
        <input type="text" name="" id="" v-model="message">
        <h3>{{ message }}</h3>
        <h3>{{ reversedMessage }}</h3>
    </div>
</template>

<script lang="ts" setup>
import { ref,Ref, computed } from 'vue';

let message = ref('Hello Vue 3');
const reversedMessage:Ref<string> = computed(() => message.value.split('').reverse().join(''));

// Option API
// import { defineComponent } from 'vue';

// export default defineComponent({
//     name: "ComputedExample",
//     data(){
//         return {
//             message: 'Hello Vue 3'
//         }
//     },
//     computed: {
//         reversedMessage(): string{      // aqui levanto un error por no especificar el tipo de dato que devuelve el computed
//             return this.message.split('').reverse().join('');
//         }
//     }
// })
</script>

<style scoped>
</style>