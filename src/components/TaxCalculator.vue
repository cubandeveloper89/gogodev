<template>
    <div>
        <h1>Calculadora de impuestos</h1>
        <label for="income">Ingresos:</label>
        <input type="number" id="income" v-model="incomes" />
        <button @click="calculateTax">Calcular impuestos</button>
        <p v-if="tax">Impuestos a pagar: {{ tax }}</p>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let incomes = ref<number[]>([]);
let tax = ref(0);

const calculateTax = () => {
    for (let index = 0; index < incomes.value.length; index++) {
        const element = incomes.value[index];
        
    }
};
</script>

<style scoped>
</style>