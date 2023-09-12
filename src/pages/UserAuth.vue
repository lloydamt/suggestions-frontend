<template>
  <div class="page-control">
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model.trim="username"
          minlength="4"
        />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model.trim="password"
          minlength="6"
        />
      </div>
      <div class="form-control" v-if="mode === 'signup'">
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          v-model.trim="conform_password"
          minlength="6"
        />
      </div>
      <base-button kind="button">{{ switchButtonText }}</base-button>
    </form>
    <div class="switch">
      <button @click="switchMode">
        {{ switchAuthCaption }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
      mode: "login",
    };
  },
  computed: {
    switchAuthCaption() {
      return this.mode === "login"
        ? "Register instead?"
        : "Already have an account?";
    },
    switchButtonText() {
      return this.mode === "login" ? "Login" : "Register";
    },
  },
  methods: {
    switchMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
    submitForm() {
      this.isValid = true;
      if (this.username.length < 5 || this.password.length < 5 || this.mode === 'signup' && this.password !== this.confirm_password) {
        this.isValid = false;
        return;
      }
      if (this.mode === 'signup' && this.password !== this.confirm_password) {
        this.isValid = false;
        return;
      }
    },
  },
};
</script>

<style scoped>
.page-control {
  border: 1px solid #0077be;
  border-radius: 10px;
  margin: 5% auto;
  width: 450px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

.switch {
  text-align: right;
  padding: 10px;
  margin-bottom: 5px;
}
.switch > button {
  all: unset;
  cursor: pointer;
  color: #0077be;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
