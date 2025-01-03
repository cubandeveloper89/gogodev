<template>
  <div>Loading Effect</div>
  <OrderDetailLoader v-if="loading"/>
  <OrderDetails v-else/>
  
</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue';
import OrderDetails from './components/OrderDetails.vue';
import OrderDetailLoader from './components/orderDetailLoader.vue';




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

