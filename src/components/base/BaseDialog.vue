<template>
  <div class="backdrop" v-if="show" @click="closeDialog"></div>
  <dialog open v-if="show">
    <header>
      <slot name="header">
        <h2>{{ title }}</h2>
      </slot>
    </header>
    <slot></slot>
    <menu v-if="!fixed">
      <slot name="actions">
        <base-button @click="closeDialog">Close</base-button>
      </slot>
    </menu>
  </dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.backdrop {
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 50%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  background-color: #0077be;
  color: white;
  width: 100%;
  padding: 1rem;
}
</style>
