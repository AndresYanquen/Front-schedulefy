<template>
    <fwb-card class="card mb-10 !bg-black-soft  sm:w-[300px] [box-shadow:-1px_10px_38px_1px_rgba(202,203,219,0.5)] border-[0px] relative md:w-[350px] lg:w-[380px] p-5">
        <section class="grid place-items-center">
            <div class="w-5 h-24 grid place-items-center w-24 rounded-full">
                <img class="w-8 h-8 filter invert-[100%] sepia-[1%] saturate-[7441%] hue-rotate-[61deg] brightness-[112%] contrast-[103%]"  :src="imgUrl" alt=''>
            </div>
            <div class=" mt-6 grid place-items-center">
              <h5 class="mb-2 text-base text-white font-bold tracking-tight text-gray-900 dark:text-white">
                {{title}}
              </h5>
              <p class="text-white text-center font-normal text-sm text-gray-700 dark:text-gray-400">
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
<style scoped>
    .card{
      animation: 4s levitation infinite;
    }

    .card:nth-child(odd) {
      animation-delay: 2s
    }
    


</style>