<template>
  <div class="page-control">
    <base-dialog :show="!!authError" title="Error" @close="closeDialog">
      <p>{{ authError }}</p>
    </base-dialog>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="username">Email Address</label>
        <input
          type="email"
          id="email"
          v-model.trim="email"
          minlength="1"
          @blur="clearErrors('length')"
        />
      </div>
      <div v-if="mode === 'signup'" class="form-control">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model.trim="username"
          minlength="4"
          @blur="clearErrors('length')"
        />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model.trim="password"
          minlength="6"
          @blur="clearErrors('length')"
        />
      </div>
      <p v-if="!isValid && error.length" class="error">
        Enter a valid username or password
      </p>
      <div class="form-control" v-if="mode === 'signup'">
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          v-model.trim="confirm_password"
          minlength="6"
          @blur="clearErrors('match')"
        />
      </div>
      <p v-if="!isValid && error.match" class="error">
        Both passwords must match
      </p>
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
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      mode: "login",
      loading: false,
      isValid: true,
      error: {
        length: false,
        match: false,
      },
      authError: null,
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
    clearErrors(select) {
      this.isValid = true;
      this.error[select] = false;
    },
    clearFields() {
      this.email = ""
      this.username = "",
      this.password = "",
      this.confirm_password = ""
    },
    closeDialog() {
      this.authError = false;
    },
    async submitForm() {
      this.isValid = true;
      if (this.username.length < 3 || this.password.length < 6) {
        this.isValid = false;
        this.error.length = true;
        return;
      }
      if (this.mode === "signup" && this.password !== this.confirm_password) {
        this.isValid = false;
        this.error.match = true;
        return;
      }
      this.loading = true;
      
      if (this.mode === "signup") {
        try {
          await this.$store.dispatch("signup", {
            email: this.email,
            username: this.username,
            password: this.password,
          });
        } catch (error) {
          this.authError = "Failed to register - " + error.message; 
        }
      }

      // if (this.mode === "login") {
      //   try {
          
      //   } catch (error) {
          
      //   }
      // }
      this.loading = false;
      this.clearFields();
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

.error {
  color: #cc0000;
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
