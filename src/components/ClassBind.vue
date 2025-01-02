<template>
    <p v-bind:class="{'danger': hasError}">El mensaje se ha enviado satisfactoriamente.</p>
    <p v-bind:style="{
        backgroundColor: '#ccc', color: c
    }">El otro mensaje para probar v-blind:styles</p>
    <button v-on:click="handleClick">Cambiar color</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';


export default defineComponent({
    name: 'ClassBind',
    setup(){
        let hasError = true;
        let c = ref('#fff')
        const handleClick = () => {
            if (c.value == '#fff') {
                c.value = '#ff0000'
            }else{c.value = '#fff'}     //el .value es porque ahora es una referencia, y es una referencia porque estamos en modo de composition API
            
        }
        return {hasError, c, handleClick}
    }
})
</script>

<style lang="css" scoped>
    .danger{
        color: red;
    }
</style>