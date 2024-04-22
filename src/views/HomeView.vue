<template>
  <DefaultLayout>
    <template class="px-4  md:px-10" #main>
      <div class="px-4  md:px-10">
        <section class="mt-20">
          <div id="firstContent" class="grid place-items-center gap-10 md:grid-cols-[1fr_200px] lg:grid-cols-[1fr_1fr]">
            <section class="h-auto bg-white dark:bg-gray-900 mb-10">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">¡Sácale provecho a tu agenda!</h1>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-10 lg:px-20 dark:text-gray-400">Nuestra App Schedulefy te ayudará a automatizar tus agendamientos, facilitar pagos y crear relaciones óptimas con tus clientes.</p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Get started
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        <a href="#" class="py-3 mt-2 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                            Learn more
                        </a>  
                    </div>
                </div>
            </section>
            <img class="mt-6 w-[300px] lg:w-[500px]" src="/icons/clients-schedule.svg" alt="organizer">
          </div>
        </section>
        <section class="mt-20 w-full grid place-items-center gap-y-10 grid-cols-[1fr] sm:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr]">
          <CardFeatures v-for="cardItem in CardContent" :title="cardItem.title" :description="cardItem.description"  :imgUrl="cardItem.imgUrl"></CardFeatures>
        </section>
      </div>
      <div>
        <section id="services" class="w-full h-auto mt-16 p-6 text-neutral-50 grid place-items-center bg-black">
          <fwb-heading class="text-lg mb-6 font-bold" tag="h1">Servicios</fwb-heading>
          <fwb-p class="text-center">
            Nuestros servicios está enfocados en prevenir errores humanos y garantizar el servicio a tus clientes
          </fwb-p>
          <section class="mt-20 w-full grid place-items-center gap-y-10 grid-cols-[1fr] sm:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr]">
            <CardServices class="mt-10" v-for="cardItem in CardServicesInfo" :title="cardItem.title" :description="cardItem.description"  :imgUrl="cardItem.imgUrl"></CardServices>
          </section>
        </section>
      </div>
      <div>
        <section class="mt-20 px-5">
          <div class="grid place-items-center gap-10 md:grid-cols-[200px_1fr] lg:grid-cols-[1fr_1fr]">
            <img class="mt-6 w-[300px] lg:w-[500px]" src="/icons/schedule_table.svg" alt="organizer">
            <section class="h-auto bg-white dark:bg-gray-900 mb-10">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">¡Te damos el dominio sobre tu tiempo!</h1>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-10 lg:px-20 dark:text-gray-400">Serás el dueño de cada instante del día, más productivo y obtendrás una reputación profesional frente a tus clientes. ¿Qué esperas? ¡Adelante!  </p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Solicitar control
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
          </div>
        </section>
      </div>
      <div>
        <section class="mt-20 px-2 bg-black">
          <div class="grid px-4 place-items-center gap-10 md:grid-cols-[1fr_200px] lg:grid-cols-[1fr_1fr]">
            <section class="h-auto dark:bg-gray-900 mb-10">
                <div class="py-8 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight text-white leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">¡Sácale provecho a tu agenda!</h1>
                    <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-10 lg:px-20 dark:text-gray-400">Nuestra App Schedulefy te ayudará a automatizar tus agendamientos, facilitar pagos y crear relaciones óptimas con tus clientes.</p>
                    <div class="flex flex-col space-y-4 gap-[10px] sm:flex-row sm:justify-center sm:space-y-0">
                      <fwb-input
                        id="contact"
                        v-model="name"
                        placeholder="Ingresa tu correo"
                        size="md"
                      />
                      <fwb-button class="h-[42px]" color="default">¡Obtener Control!</fwb-button>
                    </div>
                </div>
            </section>
            <img class="mt-6 w-[300px] lg:w-[500px]" src="/icons/phone_call.svg" alt="organizer">
          </div>
        </section>
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import CardFeatures from '@/components/CardFeatures.vue';
import CardServices from '@/components/CardServices.vue';

import { FwbButton } from 'flowbite-vue'
import { FwbInput } from 'flowbite-vue'

const name = ref('')


const CardContent = ref([
  {
    title: 'Despreocúpate del agendamiento',
    description: 'Toma el control de tu tiempo y aprovecha mejor el tiempo de tus clientes',
    imgUrl: '/icons/brainDivided.svg',
  },
  {
    title: 'Recibe notificaciones y reportes',
    description: 'Te notificaremos a ti y a tus clientes eventos próximos y recomendaciones pertinentes',
    imgUrl: '/icons/bellIcon.svg',
  },
  {
    title: 'Evita la pérdida de clientes',
    description: 'La mayoría de negocios pierden clientes potenciales por sus formas de agendamientos',
    imgUrl: '/icons/banIcon.svg',
  },

]);

const CardServicesInfo = ref([
  {
    title: 'Despreocúpate del agendamiento',
    description: 'Toma el control de tu tiempo y aprovecha mejor el tiempo de tus clientes',
    imgUrl: '/icons/brainDivided.svg',
  },
  {
    title: 'Recibe notificaciones y reportes',
    description: 'Te notificaremos a ti y a tus clientes eventos próximos y recomendaciones pertinentes',
    imgUrl: '/icons/bellIcon.svg',
  },
  {
    title: 'Evita la pérdida de clientes',
    description: 'La mayoría de negocios pierden clientes potenciales por sus formas de agendamientos',
    imgUrl: '/icons/banIcon.svg',
  },
  {
    title: 'Despreocúpate del agendamiento',
    description: 'Toma el control de tu tiempo y aprovecha mejor el tiempo de tus clientes',
    imgUrl: '/icons/brainDivided.svg',
  },
  {
    title: 'Recibe notificaciones y reportes',
    description: 'Te notificaremos a ti y a tus clientes eventos próximos y recomendaciones pertinentes',
    imgUrl: '/icons/bellIcon.svg',
  },
  {
    title: 'Evita la pérdida de clientes',
    description: 'La mayoría de negocios pierden clientes potenciales por sus formas de agendamientos',
    imgUrl: '/icons/banIcon.svg',
  },

]);


</script>

