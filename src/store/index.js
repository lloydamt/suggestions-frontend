import { createStore } from "vuex";
import moviesModule from "./modules/movies/index.js";
import commentsModule from "./modules/comments/index.js";
import authModule from "./modules/auth/index.js";

const store = createStore({
  modules: {
    movies: moviesModule,
    comments: commentsModule,
    auth: authModule,
  },
  state() {
    return {};
  },
});

export default store;
