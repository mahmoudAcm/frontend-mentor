<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StepHeader',
  props: {
    title: String,
    subTitle: String
  }
});
</script>

<template>
  <h1
    class="tablet:text-[calc(32.56/16_*_1rem)] text-[calc(24.39/16_*_1rem)] font-bold leading-[1.5] text-[#02275B] desktop:mt-[39px]"
  >
    {{ title }}
  </h1>
  <p class="tablet:text-[calc(16.81/16_*_1rem)] font-normal leading-[1.5] text-[#999A9F] mt-[3px] mb-[39px]">
    {{ subTitle }}
  </p>
</template>
