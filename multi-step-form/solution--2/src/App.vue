<template>
  <steps-navigation className="flex desktop:hidden w-full justify-center h-[172px]" />
  <div class="container mx-auto px-[16px] desktop:px-[24px]">
    <multi-step-form class="desktop:my-[106px] -mt-[73px] mb-[231px]" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MultiStepForm from './components/MultiStepForm.vue';
import StepsNavigation from './components/StepsNavigation.vue';
import { provideStore } from './providers/FormProvider.ts';

export default defineComponent({
  name: 'App',
  components: {
    MultiStepForm,
    StepsNavigation
  },
  setup() {
    provideStore();
  }
});
</script>

<style>
body {
  background: #eef5ff;
  font-family: 'Ubuntu', sans-serif;
}
</style>
