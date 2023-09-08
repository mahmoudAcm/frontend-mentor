<script lang="ts">
import { defineComponent } from 'vue';
import StepsNavigationItem from './StepsNavigationItem.vue';
import { twMerge } from 'tailwind-merge';

export default defineComponent({
  name: 'StepsNavigation',
  components: { StepsNavigationItem },
  props: {
    className: String
  },
  data() {
    return {
      activeStep: 1
    };
  },
  methods: {
    twMerge,
    setActiveStep(step: number) {
      this.activeStep = step;
    }
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
    <steps-navigation-item :stepNumber="1" name="your info" :active="activeStep === 1" :activate-step="setActiveStep" />
    <steps-navigation-item
      :stepNumber="2"
      name="select plan"
      :active="activeStep === 2"
      :activate-step="setActiveStep"
    />
    <steps-navigation-item :stepNumber="3" name="add-ons" :active="activeStep === 3" :activate-step="setActiveStep" />
    <steps-navigation-item :stepNumber="4" name="summary" :active="activeStep === 4" :activate-step="setActiveStep" />
  </div>
</template>

<style scoped></style>
