<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div
      v-if="obJobResultPage"
      data-test="job-count"
      class="flex items-center h-full px-8"
    >
      <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
      <span> <span class="text-brand-green-1">1653</span> jobs matched </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subnav",
  data() {
    return {
      obJobResultPage: true,
    };
  },
};
</script>
