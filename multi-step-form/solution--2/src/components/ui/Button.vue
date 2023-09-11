<script lang="ts">
import { twMerge } from 'tailwind-merge';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    className: String,
    fullWidth: Boolean
  },
  methods: { twMerge }
});
</script>

<template>
  <button
    :class="
      twMerge(
        'bg-[#03285C] select-none text-[#E7FFFF] rounded-[6px] px-[16px] pt-[9px] pb-[10px]',
        fullWidth ? 'w-full' : 'w-fit',
        className
      )
    "
    style="font-size: inherit"
  >
    <slot />
  </button>
</template>
