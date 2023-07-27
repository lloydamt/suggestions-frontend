import { createStore } from "vuex";
import moviesModule from "./modules/movies/index.js";
import commentsModule from "./modules/comments/index.js";

const store = createStore({
  modules: {
    movies: moviesModule,
    comments: commentsModule,
  },
  state() {
    return {};
  },
});

export default store;
