<script lang="ts">
import { defineComponent } from 'vue';
import Button from './ui/Button.vue';
import { injectStore } from '../providers/FormProvider.ts';
import { twMerge } from 'tailwind-merge';

export default defineComponent({
  name: 'FormActions',
  setup() {
    const store = injectStore();
    return {
      store
    };
  },
  components: { Button },
  methods: {
    twMerge,
    async handleNext() {
      await this.store.getPersonalInfoErrors();
      if (this.store.isStepOneFinished) this.store.activeStep++;
    },
    handleBack() {
      this.store.activeStep--;
    },
    handleConfirmation() {
      this.store.isConfirmed = true;
    }
  }
});
</script>

<template>
  <div
    :class="
      twMerge(
        'fixed flex-1 desktop:relative right-0 bottom-0 left-0 flex items-center desktop:bg-transparent bg-white desktop:shadow-none shadow-black/5 ',
        // 'gap-[16px] mt-[92px] shadow-[0px_-2px_10px] desktop:text-[1rem] leading-[1.5] desktop:tracking-[0.08px] p-[16px] desktop:p-0'
        'gap-[16px] desktop:mb-[16px] shadow-[0px_-2px_10px] desktop:text-[1rem] leading-[1.5] desktop:tracking-[0.08px] p-[16px] desktop:p-0'
      )
    "
  >
    <Button
      className="bg-transparent text-[#AAAAB4] desktop:-ml-[24px] -ml-[16px] desktop:px-[24px] desktop:pt-[11px] desktop:pb-[13px] hover:text-[#03285C] transition-colors"
      v-if="store.activeStep > 1"
      @click="handleBack"
      >Go Back
    </Button>
    <Button
      className="ml-auto desktop:px-[24px] desktop:pt-[11px] desktop:pb-[13px] hover:bg-[#174A8B] transition-colors"
      v-if="store.activeStep < 4"
      @click="handleNext"
      >Next Step
    </Button>
    <Button
      className="ml-auto bg-[#483EFF] desktop:px-[24px] desktop:pt-[11px] desktop:pb-[13px] hover:bg-[#9792F2] transition-colors"
      v-if="store.activeStep === 4"
      @click="handleConfirmation"
      >Confirm
    </Button>
  </div>
</template>
