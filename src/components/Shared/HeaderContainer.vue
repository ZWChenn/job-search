<template>
  <div class="w-full border-b border-solid border-brand-gray-1">
    <div class="mx-auto my-16 text-center">
      <slot name="title">Sameple title</slot>
      <slot name="subtitle">Sameple subtitle</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderContainer",
};
</script>
