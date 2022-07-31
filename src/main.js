import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/fonts/iconfont.css";
import "amfe-flexible";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vant);

app.mount("#app");
