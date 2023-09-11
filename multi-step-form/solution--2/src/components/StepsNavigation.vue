<script lang="ts">
import { defineComponent } from 'vue';
import StepsNavigationItem from './StepsNavigationItem.vue';
import { twMerge } from 'tailwind-merge';
import { injectStore } from '../providers/FormProvider.ts';

export default defineComponent({
  name: 'StepsNavigation',
  components: { StepsNavigationItem },
  props: {
    className: String
  },
  setup() {
    const store = injectStore();
    return {
      store
    };
  },
  methods: {
    twMerge
  }
});
</script>

<template>
  <div
    :class="
      twMerge(
        'desktop:bg-sidebar-desktop bg-sidebar-mobile h-full bg-no-repeat bg-cover',
        'desktop:bg-contain desktop:py-[40px] px-[32px] py-[32px] items-start grid desktop:gap-[32px] gap-[24px] content-start',
        className
      )
    "
  >
    <steps-navigation-item :stepNumber="1" name="your info" :active="store.activeStep === 1" />
    <steps-navigation-item :stepNumber="2" name="select plan" :active="store.activeStep === 2" />
    <steps-navigation-item :stepNumber="3" name="add-ons" :active="store.activeStep === 3" />
    <steps-navigation-item :stepNumber="4" name="summary" :active="store.activeStep === 4" />
  </div>
</template>

<style scoped></style>
