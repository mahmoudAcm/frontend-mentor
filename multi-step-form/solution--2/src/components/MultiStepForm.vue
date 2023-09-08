<script lang="ts">
import { defineComponent } from 'vue';
import StepsNavigation from './StepsNavigation.vue';

export default defineComponent({
  name: 'MultiStepForm',
  components: { StepsNavigation }
});
</script>

<template>
  <div class="desktop:w-[939px] w-full h-[600px] bg-white rounded-[10px] p-[16px] mx-auto">
    <steps-navigation className="hidden desktop:grid" />
  </div>
</template>
