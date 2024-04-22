
<template>
  <HeaderBase class="z-10"></HeaderBase>
  <RouterView/>
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import HeaderBase from '@/components/HeaderBase.vue';
</script>
<style scoped>

</style>
