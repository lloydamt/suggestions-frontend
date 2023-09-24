<template>
  <Bas>
    <div class="form-control">
      <label for="registerEmail">Email Address</label>
      <input
        type="email"
        id="registerEmail"
        v-model.trim="email"
        minlength="1"
        @blur="clearErrors"
      />
    </div>
    <div class="form-control">
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        v-model.trim="username"
        minlength="4"
        @blur="clearErrors"
      />
    </div>
    <div class="form-control">
      <label for="registerPassword">Password</label>
      <input
        type="password"
        id="registerPassword"
        v-model.trim="password"
        minlength="6"
        @blur="clearErrors"
      />
    </div>
    <!-- <p v-if="!isValid && error.length" class="error">
      Enter a valid username or password
    </p> -->
    <div class="form-control">
      <label for="confirm-password">Confirm Password</label>
      <input
        type="password"
        id="confirm-password"
        v-model.trim="confirm_password"
        minlength="6"
        @blur="clearErrors"
      />
    </div>
    <!-- <p v-if="!isValid && error.match" class="error">
      Both passwords must match
    </p> -->
  </Bas>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    clearErrors() {
      return;
    },
  },
};
</script>
