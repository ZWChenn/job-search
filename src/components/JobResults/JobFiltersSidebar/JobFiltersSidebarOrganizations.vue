<template>
  <accordion header="organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input :id="organization" type="checkbox" class="mr-3" />
            <labe :for="organization" data-test="organization">{{
              organization
            }}</labe>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>
<script>
import { mapGetters } from "vuex";
import { UNIQUE_ORGANIZATIONS } from "@/store";
import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
  },
  computed: {
    ...mapGetters([UNIQUE_ORGANIZATIONS]),
  },
};
</script>
