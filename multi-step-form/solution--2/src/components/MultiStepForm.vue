<script lang="ts">
import { defineComponent } from 'vue';
import StepsNavigation from './StepsNavigation.vue';
import PersonInfo from './steps/PersonInfo.vue';
import SelectPlan from './steps/SelectPlan.vue';
import AddOns from './steps/PickAddOns.vue';
import Summary from './steps/Summary.vue';
import { injectStore } from '../providers/FormProvider.ts';
import FormActions from './FormActions.vue';
import Greeting from './Greeting.vue';
import { TransitionChild, TransitionRoot } from '@headlessui/vue';

export default defineComponent({
  name: 'MultiStepForm',
  components: {
    TransitionChild,
    TransitionRoot,
    Greeting,
    FormActions,
    Summary,
    AddOns,
    SelectPlan,
    PersonInfo,
    StepsNavigation
  },
  setup() {
    return injectStore();
  }
});
</script>

<template>
  <div class="paper">
    <steps-navigation className="desktop:grid hidden" />
    <div class="grid h-full items-start desktop:px-[80px] grid-rows-[auto_auto_1fr]">
      <template v-if="!isConfirmed">
        <person-info v-if="activeStep === 1" />
        <select-plan v-if="activeStep === 2" />
        <add-ons v-if="activeStep === 3" />
        <Summary v-if="activeStep === 4" />
        <FormActions />
      </template>
      <template v-if="isConfirmed">
        <Greeting />
      </template>
    </div>
  </div>
</template>

<style scoped>
.paper {
  @apply mx-auto grid w-full bg-white desktop:w-[939px] desktop:h-[600px] rounded-[10px] desktop:p-[16px] px-[24px] pt-[26px] pb-[32px] desktop:grid-cols-[274px_1fr];
}
</style>
