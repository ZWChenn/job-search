<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <accordion header="Job types">
        <p>placeholder</p>
      </accordion>

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
    </section>
  </div>
</template>
<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    Accordion,
  },
};
</script>
