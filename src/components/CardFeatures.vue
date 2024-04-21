<template>
    <fwb-card class="sm:w-[300px] relative md:w-[350px] lg:w-[380px]" href="#">
        <img class="absolute top-[10px] right-[10px]" :src="imgUrl" alt=''>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white px-[10px]">
          {{title}}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{description}}
        </p>
      </div>
    </fwb-card>
</template>
<script setup>
import { FwbCard } from 'flowbite-vue'
defineProps(['title', 'description', 'imgUrl'])

</script>
<style lang="">
    
</style>