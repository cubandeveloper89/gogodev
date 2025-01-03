<template>
    <div class="flex flex-col gap-6 p-4">
      <div class="flex justify-between items-center border-b pb-2">
        <div class="relative w-full flex flex-row gap-1 lg:gap-2 justify-between">
          <p
            class="font-roboto font-bold text-base leading-[16.8px] lg:leading-[19.2px] text-neutral-1000"
          >
            <AnimatedPlaceHolder height="25px" width="80px"/>
          </p>
          <p
            class="font-roboto font-normal text-sm lg:text-md leading-[14.4px] lg:leading-[21px] text-neutral-900"
          >
          <AnimatedPlaceHolder height="25px" width="80px"/>
          </p>
        </div>
      </div>
      <div class="w-full flex sm:flex-row xs:flex-col justify-between gap-4">
        <div class="w-full bg-white flex flex-col gap-6 p-4 border border-[#CCCCCC] rounded">
            <AnimatedPlaceHolder height="45px" width="320px"/>
        </div>
        <div class="w-full bg-white flex flex-col gap-6 p-4 border border-[#CCCCCC] rounded">
            <AnimatedPlaceHolder height="45px" width="320px"/>
        </div>
      </div>
  
      <div class="w-full flex flex-col gap-4">
        <div class="flex justify-between items-center">
          <p class="font-roboto-condensed font-bold text-xl leading-6"><AnimatedPlaceHolder height="25px" width="80px"/></p>
        </div>
        <div class="w-full bg-white flex flex-col gap-6 p-4 border border-[#CCCCCC] rounded"><AnimatedPlaceHolder height="45px" width="320px"/></div>
        
      </div>
      <div><AnimatedPlaceHolder height="25px" width="120px"/></div>
      
    </div>
</template>

<script lang="ts" setup>
import AnimatedPlaceHolder from './AnimatedPlaceHolder.vue';

</script>