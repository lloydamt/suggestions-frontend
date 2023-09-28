<template>
  <section>
    <div class="form-control">
      <label for="login_email">Email Address</label>
      <input
        type="email"
        id="login_email"
        v-model.trim="inputs.email"
        minlength="1"
        @input="emitInputs"
        @blur="clearError('email')"
      />
      <p v-if="errors.email" class="error">Enter a valid email address</p>
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input
        type="password"
        id="login_password"
        v-model.trim="inputs.password"
        minlength="6"
        @input="emitInputs"
        @blur="clearError('password')"
      />
      <p v-if="errors.password" class="error">Enter a password</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      inputs: { email: "", password: "" },
    };
  },
  props: {
    errors: Object,
  },
  methods: {
    emitInputs() {
      this.$emit("set-inputs", this.inputs);
    },
    clearError(input) {
      this.$emit("clear-error", input);
    },
  },
};
</script>
