<template>
  <div class="m-10 bg-slate-400 p-3 text-center text-white font-medium text-lg" v-value-size:lg>App in VUE</div>

  <TaxCalculator/>
  
</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue';
import TaxCalculator from './components/TaxCalculator.vue';





// import { defineComponent } from 'vue';



// export default defineComponent({
  // name: "App",
  // components: {
    
  // },
  // data(){
    let nombre = 'Camilo';
    let count = ref(0);
    let loading = ref(true);
    // return {numero}
  // }
// })
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>

<style>

</style>

