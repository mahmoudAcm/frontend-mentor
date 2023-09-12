<script lang="ts">
import { defineComponent } from 'vue';
import StepHeader from '../StepHeader.vue';
import { injectStore } from '../../providers/FormProvider.ts';
import Button from '../ui/Button.vue';
import { twMerge } from 'tailwind-merge';

export default defineComponent({
  name: 'PersonInfo',
  methods: { twMerge },
  components: { Button, StepHeader },
  setup() {
    const store = injectStore();
    return {
      store
    };
  }
});
</script>

<template>
  <step-header title="Personal Info" subTitle="Please provide your name, email, and phone number." />
  <div class="grid gap-[23px] leading-[1.5]">
    <div class="grid gap-[6px]">
      <div class="flex items-center justify-between gap-[16px]">
        <label>Name</label>
        <span class="error-helper-text">{{ store.firstStepErrors.name }}</span>
      </div>
      <input
        :class="
          twMerge(
            'border rounded-[6px] text-[calc(17/16_*_1rem)] font-normal py-[10.5px] px-[15px] focus:border-[#544C95] outline-none',
            store.firstStepErrors.name ? 'border-red-500 focus:border-red-500' : ''
          )
        "
        placeholder="e.g. Stephen King"
        v-model="store.name"
      />
    </div>
    <div class="grid gap-[6px]">
      <div class="flex items-center justify-between gap-[16px]">
        <label>Email Address</label>
        <span class="error-helper-text">{{ store.firstStepErrors.email }}</span>
      </div>
      <input
        :class="
          twMerge(
            'border rounded-[6px] text-[calc(17/16_*_1rem)] font-normal py-[10.5px] px-[15px] focus:border-[#544C95] outline-none',
            store.firstStepErrors.email ? 'border-red-500 focus:border-red-500' : ''
          )
        "
        placeholder="e.g. stephenking@lorem.com"
        v-model="store.email"
      />
    </div>
    <div class="grid gap-[6px]">
      <div class="flex items-center justify-between gap-[16px]">
        <label>Phone Number</label>
        <span class="error-helper-text">{{ store.firstStepErrors.phoneNumber }}</span>
      </div>
      <input
        :class="
          twMerge(
            'border rounded-[6px] text-[calc(17/16_*_1rem)] font-normal py-[10.5px] px-[15px] focus:border-[#544C95] outline-none',
            store.firstStepErrors.phoneNumber ? 'border-red-500 focus:border-red-500' : ''
          )
        "
        placeholder="e.g. +1 234567890"
        v-model="store.phoneNumber"
      />
      <span class="ml-[16px] text-xs text-gray-500 mt-1"
        >Please start with '+' followed by the country code and the phone number.</span
      >
    </div>
  </div>
</template>

<style scoped>
input {
  width: 100%;
}

label {
  @apply text-[calc(14.91/16_*_1rem)] font-normal tracking-[-0.522px] text-[#293B51];
}

.error-helper-text {
  @apply text-[calc(14/16_*_1rem)] font-medium text-red-500;
}
</style>
