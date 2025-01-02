<template>
  <div>Mi VUE app!!! with Vite</div>
  <OrderDetails/>
  
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import OrderDetails from './components/OrderDetails.vue';




// import { defineComponent } from 'vue';



// export default defineComponent({
  // name: "App",
  // components: {
    
  // },
  // data(){
    let nombre = 'Camilo';
    let count = ref(0);
    // return {numero}
  // }
// })
</script>

<style>

</style>

