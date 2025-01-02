<template>
    <div class="example-container">
        <h2>Example Selective</h2>
        <h4 v-if="age < 18">Eres menor de edad</h4>
        <h4 v-else>Eres mayor de edad</h4>
    </div>
</template>


<script lang="ts" setup>

        let age = 10

</script>

<style scoped>
  
</style>