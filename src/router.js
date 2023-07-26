import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import MoviePage from "./pages/MoviePage.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/movies" },
    { path: "/movies", component: HomePage },
    { path: "/movies/:id", component: MoviePage, props: true },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
