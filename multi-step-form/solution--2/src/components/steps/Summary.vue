<script lang="ts">
import { defineComponent } from 'vue';
import StepHeader from '../StepHeader.vue';
import { injectStore } from '../../providers/FormProvider.ts';

export default defineComponent({
  name: 'Summary',
  components: { StepHeader },
  setup() {
    const store = injectStore();
    return {
      store
    };
  },
  computed: {
    summary() {
      return this.store.getSummary();
    },
    period() {
      return this.store.isMonthly ? 'mo' : 'yr';
    }
  },
  methods: {
    changePlan() {
      this.store.activeStep = 2;
    },
    getFormattedPrice(price) {
      return `$${price}/${this.period}`;
    }
  }
});
</script>

<template>
  <step-header title="Finishing up" subTitle="Double-check everything looks OK before confirming." />
  <div class="leading-[1.5]">
    <div class="bg-[#F8F9FE] rounded-[4px] py-[16.5px] px-[16px] tablet:px-[24px] text-[#1B3254]">
      <div class="flex items-center">
        <div class="leading-[1.4] tablet:leading-[1.5]">
          <h1 class="capitalize text-[calc(14.43/16_*_1rem)] tablet:text-[calc(16.5/16_*_1rem)] font-medium">
            {{ summary.title }}
          </h1>
          <a
            class="text-[calc(14/16_*_1rem)] text-gray-400 w-fit underline mt-[1px] tablet:mt-0"
            href="#"
            @click.prevent="changePlan"
            >Change</a
          >
        </div>
        <span class="ml-auto text-[calc(14.48/16_*_1rem)] tablet:text-[calc(16.16/16_*_1rem)] font-medium">{{
          getFormattedPrice(summary.planPrice)
        }}</span>
      </div>
      <div class="divide-gray-400 border-b pb-[23px]" v-if="summary.selectedAddOns.length"></div>
      <div class="grid gap-[15.53px] mt-[15.43px]" v-if="summary.selectedAddOns.length">
        <div v-for="addons of summary.selectedAddOns" class="flex text-[calc(14/16_*_1rem)]">
          <h2 class="text-gray-400">{{ addons.title }}</h2>
          <span class="ml-auto">+{{ getFormattedPrice(addons.price) }}</span>
        </div>
      </div>
    </div>
    <div class="flex px-[16px] tablet:px-[24px] pt-[18px]" v-if="summary.selectedAddOns.length">
      <span class="text-gray-400 text-[calc(14/16_*_1rem)]">Total (per {{ period === 'yr' ? 'year' : 'month' }})</span>
      <span
        class="ml-auto font-medium text-[calc(16.11/16_*_1rem)] tablet:text-[calc(20.85/16_*_1rem)] text-[#03285C]"
        >{{ getFormattedPrice(summary.planPrice + summary.addOnsTotalPrice) }}</span
      >
    </div>
  </div>
</template>
