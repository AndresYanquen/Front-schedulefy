<template>
    <fwb-navbar class="fixed w-full top-[0px]">
      <template #logo>
        <fwb-navbar-logo alt="Schedulefy logo" image-url="/icons/schedulefyLogo.svg" link="#firstContent">
          Schedulefy
        </fwb-navbar-logo>
      </template>
      <template #default="{isShowMenu}">
        <fwb-navbar-collapse class="fixed top-[0px] right-[50px] w-11/12" :is-show-menu="isShowMenu">
          <fwb-navbar-link is-active link="#">
            Home
          </fwb-navbar-link>
          <fwb-navbar-link link="#services">
            Services
          </fwb-navbar-link>
          <fwb-navbar-link link="#contact">
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


  </script>