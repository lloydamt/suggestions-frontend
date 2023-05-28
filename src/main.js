import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import router from "./router.js";
import BaseCard from "./components/base/BaseCard.vue";
import BaseBadge from "./components/base/BaseBadge.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-badge", BaseBadge);

app.use(store);
app.use(router);

app.mount("#app");
