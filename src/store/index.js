import { createStore } from "vuex";
import moviesModule from "./modules/movies/index.js";

const store = createStore({
  modules: {
    movies: moviesModule,
  },
  state() {
    return {};
  },
});

export default store;
