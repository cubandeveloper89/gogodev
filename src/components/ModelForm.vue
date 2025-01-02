<template>
    <h1>Model Form</h1>
    <form>
        <input type="text" name="" id="" v-model="inputText">
        <input type="checkbox" name="" id="" v-model="agree"> Acepto los terminos y condiciones 
        <select name="" id="" v-model="country">
            <option value="Spain">Spain</option>
            <option value="UK">UK</option>
            <option value="France">France</option>
        </select>
    </form>
    <h3>{{ inputText }}</h3>
</template>
    
<script lang="ts" setup>
import { Ref, ref } from 'vue';

    let inputText:Ref<string> = ref('')
    let agree:Ref<boolean> = ref(true)
    let country: Ref<string> = ref('Spain')

</script>


<style lang="css" scoped>
</style>