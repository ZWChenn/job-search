<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div
      v-if="obJobResultPage"
      data-test="job-count"
      class="flex items-center h-full px-8"
    >
      <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
      <span>
        <span class="text-brand-green-1">
          {{ FILTERED_JOBS_BY_ORGANIZATIONS.length }}
        </span>
        jobs matched
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FILTERED_JOBS_BY_ORGANIZATIONS } from "@/store/constants";
export default {
  name: "Subnav",
  computed: {
    ...mapGetters([FILTERED_JOBS_BY_ORGANIZATIONS]),
    obJobResultPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>
