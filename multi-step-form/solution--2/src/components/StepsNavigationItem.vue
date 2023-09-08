<script lang="ts">
import { defineComponent } from 'vue';
import { twMerge } from 'tailwind-merge';

export default defineComponent({
  name: 'StepsNavigationItem',
  methods: { twMerge },
  props: {
    stepNumber: Number,
    name: String,
    active: Boolean,
    activateStep: Function
  }
});
</script>

<template>
  <div class="flex gap-[15px] items-center text-white">
    <div
      :class="
        twMerge(
          'w-[34px] h-[34px] rounded-full grid place-items-center border select-none',
          active ? 'bg-[#BEE1FE] text-black border-transparent' : ''
        )
      "
      @click="activateStep!(stepNumber)"
    >
      {{ stepNumber }}
    </div>
    <div class="desktop:grid uppercase hidden">
      <span class="text-[calc(12.5/16_*_1rem)] tracking-[-0.25px] leading-[calc(14/12.5)] text-[#ADADFF]"
        >STEP {{ stepNumber }}</span
      >
      <span class="text-[calc(15.58/16_*_1rem)] leading-[calc(18/15.58)] mt-[2px]">{{ name }}</span>
    </div>
  </div>
</template>
