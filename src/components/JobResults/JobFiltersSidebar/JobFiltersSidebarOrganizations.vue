<template>
  <accordion header="organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <labe for="VueTube">VueTube</labe>
          </li>
          <li class="w-1/2 h-8">
            <input id="Between Vue and Me" type="checkbox" class="mr-3" />
            <labe for="Between Vue and Me">Between Vue</labe>
          </li>
          <li class="w-1/2 h-8">
            <input id="Et Vue Brute" type="checkbox" class="mr-3" />
            <labe for="Et Vue Brute">Et Vue Brute</labe>
          </li>
          <li class="w-1/2 h-8">
            <input id="Vue and a Half Men" type="checkbox" class="mr-3" />
            <labe for="Vue and a Half Men">Vue and a Half Men</labe>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>
<script>
import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
  },
};
</script>
