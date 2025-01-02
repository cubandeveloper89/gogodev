<template>
    <div class="content">
        <h1>Exercise Bills Tax</h1>
        <div>
            <label for="bill">Bill</label>
            <input type="number" name="bill" id="bill" v-model="bill">
        </div>
        <div>
            <label for="tax">Tax</label>
            <input type="number" name="tax" id="tax" v-model="tax">
        </div>
        <div>
            <label for="total">Total</label>
            <input type="number" name="total" id="total" :value="total" readonly>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

let bill = ref(0);
let tax = ref(0);
</script>

<style scoped>
</style>