<template>
    <div class="m-2 flex flex-col items-center">
        <h1 class="m-2">Calculadora de impuestos</h1>
        <div class="flex items-center gap-5 border-black border-2 p-2">
            <label for="product" class="font-medium">Producto:</label>
            <input type="text" id="product" placeholder="Product name" v-model="newProduct" />
            <label for="amount" class="font-medium">Costo:</label>
            <input class=" w-14" type="number" id="amount" v-model="newAmount" />
        </div>
        <button class="mt-4 p-2 rounded bg-slate-900 text-white" @click="addBill">Agregar gasto</button>
        <label for="income" class="font-medium mt-4">Gastos:</label>
        <div
        class="flex m-2 w-64 justify-between border-b-2 border-gray-300"
        v-for="(bill, index) in bills" :key="index"
        >
            <span>{{ bill.product }}</span>
            <span>{{ bill.amount }} USD</span>
        </div>
        <!-- <button class="mt-4 p-2 rounded bg-slate-900 text-white" @click="calculateTax">Calcular impuestos</button> -->
        <p class="mt-6" v-if="tax">Impuestos a pagar: <span class=" p-4 bg-red-700 rounded-md text-yellow-200 font-medium">{{ tax }}</span> USD</p>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

let bills =  ref<{product:string, amount: number }[]>([
    {product: 'Laptop', amount: 1000},
    {product: 'Mouse', amount: 20},
    {product: 'Keyboard', amount: 50},
]);
let newProduct = ref('');
let newAmount = ref(0);
const vat = 10;


const addBill = () => {
    if (newProduct.value && newAmount.value > 0) {
        bills.value.push({ product: newProduct.value, amount: newAmount.value });
        newProduct.value = '';
        newAmount.value = 0;
    }
};

// const calculateTax = () => {
//     tax.value = 0;
//     for (let index = 0; index < bills.value.length; index++) {
//         const element = bills.value[index];
//         tax.value += element.amount * 0.1; // Example: 10% tax
//     } return tax.value;
// };

const tax = computed(() => {
    return bills.value.reduce((total, bill) => total + bill.amount * (vat/100), 0); // Example: 10% tax
});
</script>

<style scoped>
</style>