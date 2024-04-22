<template>
    <fwb-card class="mb-10 sm:w-[300px] relative md:w-[350px] lg:w-[380px] p-5" href="#">
        <section class="grid place-items-center">
            <div class="w-5 h-24 grid place-items-center w-24 rounded-full">
                <img class="w-8 h-8"  :src="imgUrl" alt=''>
            </div>
            <div class=" mt-6 grid place-items-center">
              <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                {{title}}
              </h5>
              <p class="text-center font-normal text-sm text-gray-700 dark:text-gray-400">
                {{description}}
              </p>
            </div>
        </section>
    </fwb-card>
</template>
<script setup>
import { FwbCard } from 'flowbite-vue'
defineProps(['title', 'description', 'imgUrl'])

</script>
<style lang="">
    
</style>