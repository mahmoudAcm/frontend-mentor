<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Greeting'
});
</script>

<template>
  <div class="grid place-items-center h-full place-content-center text-center row-span-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      class="tablet:w-[80px] tablet:h-[80px] w-[56px] h-[56px]"
    >
      <g fill="none">
        <circle cx="40" cy="40" r="40" fill="#F9818E" />
        <path
          fill="#E96170"
          d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"
        />
        <path
          fill="#FFF"
          d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"
        />
      </g>
    </svg>
    <h1
      class="text-[calc(23.93/16_*_1rem)] tablet:text-[calc(32.17/16_*_1rem)] font-bold leading-[1.5] mt-[19px] tablet::mt-[25px] text-[#03285C]"
    >
      Thank you!
    </h1>
    <p class="leading-[1.55] text-[1rem] max-w-[437px] mt-[7px] tablet:mt-[10px] text-gray-500">
      Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please
      feel free to email us at support@loremgaming.com.
    </p>
  </div>
</template>
