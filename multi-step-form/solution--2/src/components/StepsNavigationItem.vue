<script lang="ts">
import { defineComponent } from 'vue';
import { twMerge } from 'tailwind-merge';
import { injectStore } from '../providers/FormProvider.ts';

export default defineComponent({
  name: 'StepsNavigationItem',
  setup() {
    const store = injectStore();
    return {
      store
    };
  },
  methods: {
    twMerge,
    async setActiveStep(step: number) {
      await this.store.getPersonalInfoErrors();
      if (!this.store.isConfirmed && this.store.isStepOneFinished) this.store.activeStep = step;
    }
  },
  props: {
    stepNumber: {
      type: Number,
      required: true
    },
    name: String,
    active: Boolean
  }
});
</script>

<template>
  <div class="flex items-center text-white gap-[15px]">
    <div
      :class="
        twMerge(
          'w-[34px] h-[34px] rounded-full grid place-items-center border select-none',
          active ? 'bg-[#BEE1FE] text-black border-transparent' : '',
          store.isConfirmed ? 'pointer-events-none' : 'cursor-pointer'
        )
      "
      @click="setActiveStep(stepNumber)"
    >
      {{ stepNumber }}
    </div>
    <div class="desktop:grid hidden uppercase">
      <span class="text-[calc(12.5/16_*_1rem)] tracking-[-0.25px] leading-[calc(14/12.5)] text-[#ADADFF]"
        >STEP {{ stepNumber }}</span
      >
      <span class="text-[calc(15.58/16_*_1rem)] leading-[calc(18/15.58)] mt-[2px]">{{ name }}</span>
    </div>
  </div>
</template>
