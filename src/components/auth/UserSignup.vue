<template>
  <div class="form-control">
    <label for="registerEmail">Email Address</label>
    <input
      type="email"
      id="registerEmail"
      v-model.trim="inputs.email"
      minlength="1"
      @input="emitInputs"
    />
  </div>
  <div class="form-control">
    <label for="username">Username</label>
    <input
      type="text"
      id="username"
      v-model.trim="inputs.username"
      minlength="4"
      @input="emitInputs"
      @blur="clearErrors('username')"
    />
    <p v-if="errors.username" class="error">
      Username must be at least 4 characters long
    </p>
  </div>
  <div class="form-control">
    <label for="registerPassword">Password</label>
    <input
      type="password"
      id="registerPassword"
      v-model.trim="inputs.password"
      minlength="6"
      @input="emitInputs"
      @blur="clearErrors('password')"
    />
  </div>
  <p v-if="errors.password" class="error">
    Password must be at least 6 characters long
  </p>
  <div class="form-control">
    <label for="confirm-password">Confirm Password</label>
    <input
      type="password"
      id="confirm-password"
      v-model.trim="inputs.confirmPassword"
      minlength="6"
      @input="emitInputs"
      @blur="clearErrors('confirmPassword')"
    />
  </div>
  <p v-if="errors.confirmPassword" class="error">Both passwords must match</p>
</template>

<script>
export default {
  data() {
    return {
      inputs: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
      formIsValid: false,
      isDirty: false,
    };
  },
  props: {
    submit: Boolean,
    mode: String,
    errors: Object,
  },
  methods: {
    emitInputs() {
      this.$emit("set-inputs", this.inputs);
    },
    clearErrors(input) {
      if (this.errors[input]) this.$emit("clear-error", input);
    },
  },
};
</script>
