import { createSSRApp } from "vue";
import uviewPlus from "uview-plus";
import pinia from "@/store/index";
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);
  app.use(uviewPlus);
  return {
    app,
  };
}
