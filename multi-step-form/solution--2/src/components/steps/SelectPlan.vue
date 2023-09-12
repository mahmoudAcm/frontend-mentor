<script lang="ts">
import { defineComponent } from 'vue';
import StepHeader from '../StepHeader.vue';
import Plan from '../Plan.vue';
import { RadioGroup, Switch } from '@headlessui/vue';
import { injectStore } from '../../providers/FormProvider.ts';

export default defineComponent({
  name: 'SelectPlan',
  components: {
    StepHeader,
    RadioGroup,
    Plan,
    Switch
  },
  setup() {
    const store = injectStore();
    return {
      store
    };
  },
  computed: {
    period() {
      return this.store.isMonthly ? 'mo' : 'yr';
    },
    arcadePrice() {
      if (this.store.isMonthly) return `$9/${this.period}`;
      return `$90/${this.period}`;
    },
    advancedPrice() {
      if (this.store.isMonthly) return `$12/${this.period}`;
      return `$120/${this.period}`;
    },
    proPrice() {
      if (this.store.isMonthly) return `$15/${this.period}`;
      return `$150/${this.period}`;
    },
    offer() {
      if (!this.store.isMonthly) return '2 months free';
      return '';
    }
  },
  methods: {
    toggleMonthly(evt: KeyboardEvent) {
      if (evt.key === 'Enter') this.store.isMonthly = !this.store.isMonthly;
    },
    switchToMonthly() {
      this.store.isMonthly = true;
    },
    switchToYearly() {
      this.store.isMonthly = false;
    }
  }
});
</script>

<template>
  <step-header title="Select your plan" subTitle="You have the option of monthly or yearly billing." />
  <div>
    <RadioGroup v-model="store.plan" class="flex desktop:flex-row flex-col justify-between gap-[16px]">
      <Plan type="Arcade" :price="arcadePrice" :offer="offer">
        <template v-slot:icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <g fill="none" fill-rule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
              />
            </g>
          </svg>
        </template>
      </Plan>
      <Plan type="Advanced" :price="advancedPrice" :offer="offer">
        <template v-slot:icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <g fill="none" fill-rule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#F9818E" />
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
              />
            </g>
          </svg>
        </template>
      </Plan>
      <Plan type="Pro" :price="proPrice" :offer="offer">
        <template v-slot:icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <g fill="none" fill-rule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#483EFF" />
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
              />
            </g>
          </svg>
        </template>
      </Plan>
    </RadioGroup>
    <div
      class="h-[48px] bg-[#F8F9FE] rounded-[6px] mt-[32px] flex items-center justify-center gap-[24px] text-[calc(14.5/16_*_1rem)] leading-[1.5] font-normal select-none tracking-[0px]"
    >
      <span
        class="cursor-pointer"
        :class="store.isMonthly ? 'text-[#02275B]' : 'text-gray-500'"
        @click="switchToMonthly"
        >Monthly</span
      >
      <Switch
        v-model="store.isMonthly"
        class="relative inline-flex h-6 w-11 items-center rounded-full bg-[#03285C]"
        @keydown="toggleMonthly"
      >
        <span class="sr-only">Enable notifications</span>
        <span
          :class="!store.isMonthly ? 'translate-x-6' : 'translate-x-1'"
          class="inline-block h-4 w-4 transform rounded-full bg-white transition"
        />
      </Switch>
      <span
        class="cursor-pointer"
        :class="!store.isMonthly ? 'text-[#02275B]' : 'text-gray-500'"
        @click="switchToYearly"
        >Yearly</span
      >
    </div>
  </div>
</template>
