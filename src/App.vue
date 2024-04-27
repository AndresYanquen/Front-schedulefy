
<template>
  <HeaderBase class="z-10"></HeaderBase>
  <RouterView/>
  <FooterBase></FooterBase>
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import HeaderBase from '@/components/HeaderBase.vue';
  import FooterBase from '@/components/FooterBase.vue';
</script>
<style scoped>

</style>
