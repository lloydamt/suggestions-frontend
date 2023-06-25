<template>
  <base-card>
    <h2>Suggest Movie</h2>
    <form @submit.prevent="submitMovie">
      <div class="form-control">
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          v-model.trim="title"
          @blur="clearErrors('title')"
        />
        <p v-if="error.title">
          Please enter a title containing at least 2 characters
        </p>
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          rows="3"
          id="description"
          v-model.trim="description"
          @blur="clearErrors('desc')"
        ></textarea>
        <p v-if="error.desc">
          Please enter a description containing at least 2 characters
        </p>
      </div>
      <div class="form-control">
        <label for="year">Year</label>
        <input
          type="number"
          min="1900"
          :max="presentYear"
          step="1"
          v-model="year"
          @blur="clearErrors('year')"
        />
        <p v-if="this.error.year">Please enter a year</p>
      </div>
      <div class="form-control">
        <h4>Genres</h4>
        <p v-if="error.genres">
          Please select at least 1 closely-matching genre
        </p>
        <div>
          <input
            type="checkbox"
            id="action"
            value="action"
            v-model="genres"
            @blur="clearErrors('genres')"
          />
          <label for="action">Action</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="adventure"
            value="adventure"
            v-model="genres"
            @blur="clearErrors('genres')"
          />
          <label for="adventure">Adventure</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="comedy"
            value="comedy"
            v-model="genres"
            @blur="clearErrors('genres')"
          />
          <label for="comedy">Comedy</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="scifi"
            value="scifi"
            v-model="genres"
            @blur="clearErrors('genres')"
          />
          <label for="scifi">Sci-Fi</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="romance"
            value="romance"
            v-model="genres"
            @blur="clearErrors('genres')"
          />
          <label for="romance">Romance</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="documentary"
            value="documentary"
            v-model="genres"
            @blur="clearErrors('genres')"
          />
          <label for="documentary">Documentary</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="thriller"
            value="thriller"
            v-model="genres"
            @blur="clearErrors('genres')"
          />
          <label for="thriller">Thriller</label>
        </div>
      </div>
      <base-button kind="button">Add Movie</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  computed: {
    presentYear() {
      return new Date().getFullYear();
    },
  },
  data() {
    return {
      title: "",
      description: "",
      year: "",
      genres: [],
      error: {
        title: null,
        desc: null,
        genres: null,
        year: null,
      },
      valid: true,
    };
  },
  methods: {
    submitMovie() {
      this.validateInputs();
      if (this.valid) {
        const movie = {
          title: this.title,
          description: this.description,
          year: this.year,
          genres: this.genres,
        };
        this.$store.dispatch("addMovie", movie);
        this.clearForm();
      }
    },
    validateInputs() {
      this.valid = true;
      if (this.title === "") {
        this.valid = false;
        this.error.title = true;
      }
      if (this.description === "") {
        this.valid = false;
        this.error.desc = true;
      }
      if (this.year === "") {
        this.valid = false;
        this.error.year = true;
      }
      if (this.genres.length === 0) {
        this.valid = false;
        this.error.genres = true;
      }
    },
    clearErrors(input) {
      this.error[input] = null;
    },
    clearForm() {
      this.title = "";
      this.description = "";
      this.year = "";
      this.genres = [];
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h4 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
