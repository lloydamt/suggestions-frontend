<template>
  <button v-if="kind === 'button'">{{ text }}</button>
  <router-link v-else>{{ text }}</router-link>
</template>

<script>
export default {
  props: {
    kind: {
      type: String,
      default: "link",
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
