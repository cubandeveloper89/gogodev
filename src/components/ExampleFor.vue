<template>
    <h2>Example For</h2>
    <ul>
        <li v-for="(country) in countries" v-bind:key="country.code">{{ country.name }} ({{ country.code }})</li>
    </ul>
</template>
    
<script lang="ts" setup>
import { Ref, ref} from 'vue';
interface ICountry {
    code: string,
    name: string
}

let countries:Ref<ICountry[]> = ref([
    {
        code: 'es',
        name: 'Spain'
    },
    {
        code: 'en',
        name: 'UK'
    },
    {
        code: 'fr',
        name: 'France'
    },
    {
        code: 'it',
        name: 'Italy'
    },
    {
        code: 'pt',
        name: 'Portugal'
    }
])
</script>

<style lang="css" scoped>
</style>