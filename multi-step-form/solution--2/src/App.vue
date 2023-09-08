<template>
  <steps-navigation className="desktop:hidden flex justify-center w-full h-[172px]" />
  <div class="container mx-auto px-[16px] desktop:px-[24px]">
    <multi-step-form class="desktop:my-[106px] -mt-[73px]" />
  </div>
</template>
<script setup>
import MultiStepForm from './components/MultiStepForm.vue';
import StepsNavigation from './components/StepsNavigation.vue';
</script>

<style>
body {
  background: #eef5ff;
  font-family: 'Ubuntu', sans-serif;
}
</style>
