<script lang="ts">
import { defineComponent } from 'vue';
import { injectStore } from '../providers/FormProvider.ts';
import { twMerge } from 'tailwind-merge';

export default defineComponent({
  name: 'AddOns',
  props: {
    checked: Boolean,
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    service: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  },
  setup() {
    const store = injectStore();
    return {
      store
    };
  },
  data() {
    const isChecked = this.checked;
    return {
      isChecked
    };
  },
  methods: {
    twMerge,
    toggleAddons(checked: boolean) {
      const index = this.store.selectedAddOns.findIndex(addons => addons.type == this.type);
      if (index === -1 && checked) {
        this.store.selectedAddOns.push({ type: this.type as any });
      } else if (index !== -1 && !checked) this.store.selectedAddOns.splice(index, 1);
    },
    toggleCheck(type: 'click' | 'keydown') {
      return (evt: KeyboardEvent | MouseEvent) => {
        if (type === 'keydown' && evt instanceof KeyboardEvent && evt.key === 'Enter') {
          this.isChecked = !this.isChecked;
          this.toggleAddons(this.isChecked);
        }
        if (type === 'click') {
          this.isChecked = !this.isChecked;
          this.toggleAddons(this.isChecked);
        }
      };
    }
  }
});
</script>

<template>
  <div
    :class="
      twMerge(
        'min-h-[82px] border rounded-[6px] flex flex-wrap items-center tablet:py-[16px] tablet:px-[24px] py-[11.59px] px-[16px] select-none focus-within:ring hover:border-[#544C95] transition-colors',
        isChecked ? 'bg-[#F8F9FE] border-[#544C95]' : ''
      )
    "
    @click="event => toggleCheck('click')(event)"
  >
    <label
      class="w-[21px] h-[21px] block relative rounded-[4px] border"
      :class="isChecked ? 'bg-[#453FF9] border-transparent' : ''"
      @keydown="event => toggleCheck('keydown')(event)"
    >
      <input type="checkbox" class="sr-only" :checked="isChecked" @change="isChecked = !isChecked" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="9"
        viewBox="0 0 12 9"
        v-if="isChecked"
        class="absolute m-auto inset-0"
      >
        <path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1" />
      </svg>
    </label>
    <div class="leading-[1.4] tablet:leading-[1.5] tablet:ml-[24px] ml-[16px] flex-1">
      <h2 class="text-[calc(14.41/16_*_1rem)] tablet:text-[calc(16.5/16_*_1rem)] text-[#02275B]">{{ title }}</h2>
      <span class="text-[calc(12/16_*_1rem)] tablet:text-[calc(14/16_*_1rem)] text-gray-400">{{ service }}</span>
    </div>
    <span class="text-[calc(12/16_*_1rem)] tablet:text-[calc(14/16_*_1rem)] text-[#675EBB]">{{ price }}</span>
  </div>
</template>
