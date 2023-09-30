<template>
  <div class="page-control">
    <base-dialog :show="!!authError" title="Error" @close="closeDialog">
      <p>{{ authError }}</p>
    </base-dialog>
    <base-dialog
      :show="!!emptyFormError"
      title="Enter some data"
      @close="closeDialog"
    >
      <p>{{ emptyFormError }}</p>
    </base-dialog>
    <form @submit.prevent="submitForm">
      <UserSignup
        v-if="mode === 'signup'"
        :errors="errors"
        @set-inputs="setInputs"
        @clear-error="clearError"
      />
      <UserLogin
        v-else
        :errors="errors"
        @set-inputs="setInputs"
        @clear-error="clearError"
      />
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
import UserSignup from "@/components/auth/UserSignup.vue";
import UserLogin from "@/components/auth/UserLogin.vue";
export default {
  components: {
    UserLogin,
    UserSignup,
  },
  created() {
    this.initialFormData = { ...this.inputs };
  },
  data() {
    return {
      inputs: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
      initialFormData: {},
      mode: "login",
      loading: false,
      formIsValid: true,
      errors: {
        email: false,
        username: false,
        password: false,
        confirmPassword: false,
      },
      authError: null,
      emptyFormError: null,
      isDirty: false,
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
    isFormChanged() {
      return (
        JSON.stringify(this.inputs) !== JSON.stringify(this.initialFormData)
      );
    },
  },
  methods: {
    switchMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
      this.clearErrors();
      this.clearFields();
    },
    setInputs(inputs) {
      this.inputs = inputs;
      this.isDirty = this.isFormChanged;
    },
    clearError(input) {
      this.errors[input] = false;
    },
    clearErrors() {
      for (let input in this.errors) {
        this.errors[input] = false;
      }
    },
    clearFields() {
      for (let input in this.inputs) {
        this.inputs[input] = "";
      }
    },
    closeDialog() {
      this.authError = null;
      this.emptyFormError = null;
    },
    async submitForm() {
      if (!this.isDirty) {
        this.emptyFormError = "Please enter some data into the form";
      } else {
        this.isValid = true;
        this.validateFormData();
      }

      if (this.formIsValid && this.authError === null) {
        this.loading = true;
        if (this.mode === "signup") {
          await this.attemptSignup();
        }

        if (this.mode === "login") {
          await this.attemptLogin();
        }
        this.loading = false;
      }
    },
    async attemptSignup() {
      try {
        await this.$store.dispatch("signup", {
          email: this.inputs.email,
          username: this.inputs.username,
          password: this.inputs.password,
        });
        this.clearFields();
        this.$router.replace("/");
      } catch (error) {
        this.authError = "Failed to register - try again";
      }
    },
    async attemptLogin() {
      try {
        await this.$store.dispatch("login", {
          email: this.inputs.email,
          password: this.inputs.password,
        });
        this.clearFields();
        this.$router.push("/");
      } catch (error) {
        this.authError = "Failed to login - try again";
      }
    },
    validateEmail() {
      const input = "email";
      if (this.inputs.email.length < 1 && !this.inputs.email.includes("@")) {
        this.setInvalidForm(input);
      } else {
        this.setValidForm(input);
      }
    },
    validateUsername() {
      const input = "username";
      if (this.inputs.username.length < 4) {
        this.setInvalidForm(input);
      } else {
        this.setValidForm(input);
      }
    },
    validatePassword() {
      if (this.mode === "signup") {
        this.attemptPasswordValidation(6);
      } else {
        this.attemptPasswordValidation(1);
      }
    },
    attemptPasswordValidation(length) {
      if (this.inputs.password.length < length) {
        this.setInvalidForm("password");
      } else {
        this.setValidForm("password");
      }
    },
    validateConfirmPassword() {
      const input = "confirmPassword";
      if (
        this.inputs.confirmPassword !== this.inputs.password &&
        !this.errors.password
      ) {
        this.setInvalidForm(input);
      } else {
        this.setValidForm(input);
      }
    },
    validateFormData() {
      this.validateEmail();
      this.validatePassword();
      if (this.mode === "signup") {
        this.validateUsername();
        this.validateConfirmPassword();
      }
    },
    setValidForm(input) {
      this.errors[input] = false;
      if (
        !this.errors.email &&
        !this.errors.username &&
        !this.errors.password &&
        !this.errors.confirmPassword
      )
        this.formIsValid = true;
    },
    setInvalidForm(input) {
      this.errors[input] = true;
      this.formIsValid = false;
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

:deep(.error) {
  color: #cc0000;
  font-size: 13px;
}

form {
  margin: 1rem;
  padding: 1rem;
}

:deep(.form-control) {
  margin: 0.5rem 0;
}

:deep(label) {
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

:deep(input, textarea) {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

:deep(input:focus, textarea:focus) {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
