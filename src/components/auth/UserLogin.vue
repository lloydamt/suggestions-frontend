<template>
  <section>
    <div class="form-control">
      <label for="email">Email Address</label>
      <input
        type="email"
        id="email"
        v-model.trim="email"
        minlength="1"
        @blur="clearErrors"
      />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model.trim="password"
        minlength="6"
        @blur="clearErrors"
      />
    </div>
    <!-- <p v-if="!isValid && error.length" class="error">
    Enter a valid username or password
  </p> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    clearErrors() {
      return;
    },
  },
};
</script>
