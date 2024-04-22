<template>
    <div class="layout-wrapper">
      <header>
        <slot name="header"></slot>
      </header>
      <aside class="sidebar">
        <slot name="aside"> </slot>
      </aside>
      <main class="">
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </template>
  <script setup lang="ts"></script>
  <style scoped>
  .layout-wrapper {
    width: 100%;
    height: 100%;
  }
  
  header {
    width: 100%;
    height: auto;
  }
  
  main {
    width: 100%;
  }
  
  footer {
    width: 100%;
  }
  </style>
  