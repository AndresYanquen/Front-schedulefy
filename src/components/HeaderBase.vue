<template>
    <fwb-navbar class="fixed w-full top-[0px]">
      <template #logo>
        <fwb-navbar-logo alt="Schedulefy logo" image-url="/icons/schedulefyLogo.svg" link="#firstContent">
          Schedulefy
        </fwb-navbar-logo>
      </template>
      <template #default="{isShowMenu}">
        <fwb-navbar-collapse class="fixed top-[60px] px-[10px] right-[0px] w-11/12" :is-show-menu="isShowMenu">
          <fwb-navbar-link @click="toggleMenu" link="#">
            Home
          </fwb-navbar-link>
          <fwb-navbar-link @click="toggleMenu" link="#services">
            Services
          </fwb-navbar-link>
          <fwb-navbar-link @click="toggleMenu" link="#contact">
            Contact
          </fwb-navbar-link>
        </fwb-navbar-collapse>
      </template>
    </fwb-navbar>
  </template>
  
  <script setup>
    import { onMounted } from 'vue';
    import {
        FwbNavbar,
        FwbNavbarCollapse,
        FwbNavbarLink,
        FwbNavbarLogo,
    } from 'flowbite-vue';

    const toggleMenu = () =>{
      const buttonToggle = document.querySelector('button[aria-controls="navbar-default"][aria-expanded="false"].inline-flex.items-center.p-2.ml-3.text-sm.text-gray-500.rounded-lg.md\\:hidden.hover\\:bg-gray-100.focus\\:outline-none.focus\\:ring-2.focus\\:ring-gray-200.dark\\:text-gray-400.dark\\:hover\\:bg-gray-700.dark\\:focus\\:ring-gray-600[type="button"]');
      if ( buttonToggle ) {
        const phoneMenu = document.querySelector('div.w-full.md\\:block.md\\:w-auto.fixed.top-\\[60px\\].px-\\[10px\\].right-\\[0px\\].w-11\\/12');
        phoneMenu.classList.toggle('hidden');
      }
      

    }


  </script>