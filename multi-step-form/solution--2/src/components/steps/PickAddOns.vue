<script lang="ts">
import { defineComponent } from 'vue';
import StepHeader from '../StepHeader.vue';
import AddOns from '../AddOns.vue';
import { injectStore } from '../../providers/FormProvider.ts';

export default defineComponent({
  name: 'PickAddOns',
  components: { AddOns, StepHeader },
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
    onlineServicePrice() {
      if (this.store.isMonthly) return `+$1/${this.period}`;
      return `+$10/${this.period}`;
    },
    largerStoragePrice() {
      if (this.store.isMonthly) return `+$2/${this.period}`;
      return `+$20/${this.period}`;
    },
    customizableProfilePrice() {
      if (this.store.isMonthly) return `+$2/${this.period}`;
      return `$20/${this.period}`;
    }
  }
});
</script>

<template>
  <step-header title="Pick add-ons" subTitle="Add-ons help enhance your gaming experience." />
  <div class="grid gap-[16px]">
    <AddOns
      title="Online Service"
      service="Access to multiplayer games"
      :price="onlineServicePrice"
      type="Online"
      :checked="store.selectedAddOns.some(addons => addons.type === 'Online')"
    />
    <AddOns
      title="Larger storage"
      service="Extra 1TB of cloud save"
      :price="largerStoragePrice"
      type="Storage"
      :checked="store.selectedAddOns.some(addons => addons.type === 'Storage')"
    />
    <AddOns
      title="Customizable Profile"
      service="Custom theme on your profile"
      :price="customizableProfilePrice"
      type="Customizable"
      :checked="store.selectedAddOns.some(addons => addons.type === 'Customizable')"
    />
  </div>
</template>
