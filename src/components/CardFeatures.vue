<template>
    <div class="sm:w-[300px] relative md:w-[350px] lg:w-[380px] p-5" href="#">
      <img class="mb-5" :src="imgUrl" alt=''>
      <div>
        <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
          {{title}}
        </h5>
        <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
          {{description}}
        </p>
      </div>
    </div>
</template>
<script setup>
import { FwbCard } from 'flowbite-vue'
defineProps(['title', 'description', 'imgUrl'])

</script>
<style lang="">
    
</style>