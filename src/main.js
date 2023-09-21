import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import router from "./router.js";
import BaseCard from "./components/base/BaseCard.vue";
import BaseBadge from "./components/base/BaseBadge.vue";
import BaseButton from "./components/base/BaseButton.vue";
import BaseDialog from "./components/base/BaseDialog.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-badge", BaseBadge);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);

app.use(store);
app.use(router);

app.mount("#app");
