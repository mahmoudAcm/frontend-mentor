<script lang="ts">
import { defineComponent } from 'vue';
import { RadioGroupOption } from '@headlessui/vue';
import { twMerge } from 'tailwind-merge';
import { injectStore } from '../providers/FormProvider.ts';

export default defineComponent({
  name: 'Plan',
  methods: { twMerge },
  props: {
    type: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    offer: {
      type: String
    }
  },
  components: {
    RadioGroupOption
  },
  setup() {
    const store = injectStore();
    return {
      store
    };
  }
});
</script>

<template>
  <RadioGroupOption v-slot="{ checked }" :value="type" as="template">
    <div
      :class="
        twMerge(
          'flex desktop:flex-col desktop:items-start gap-[13px] desktop:gap-[37px] desktop:w-[138px] w-full desktop:min-h-[161px] rounded-[6px] py-[19px] px-[16px] border select-none leading-[1.5] font-normal hover:border-[#544C95] transition-colors',
          checked ? 'bg-[#F8F9FE] border-[#544C95]' : '',
          store.isMonthly ? 'items-center' : 'items-start'
        )
      "
    >
      <slot name="icon" />
      <div class="mt-auto grid">
        <h2 class="text-[calc(16.5/16_*_1rem)] text-[#02275B]">{{ type }}</h2>
        <span class="text-[calc(14.14/16_*_1rem)] text-gray-400">{{ price }}</span>
        <span class="text-[calc(11.94/16_*_1rem)] text-[#172538] mt-[4.59px]" v-if="offer">{{ offer }}</span>
      </div>
    </div>
  </RadioGroupOption>
</template>
