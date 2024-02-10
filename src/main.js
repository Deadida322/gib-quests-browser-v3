import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/* stylelint-disable */
import vuetify from "./plugins/vuetify";
import CKEditor from "@ckeditor/ckeditor5-vue";
import { loadFonts } from "./plugins/webfontloader";
import { GComponents } from "@/components/UI";
import gradientIcon from "@/directives/gradientIcon";
import gradientOutline from "@/directives/gradientOutline";

loadFonts();
const Vue = createApp(App);
import { createPinia } from "pinia";
const pinia = createPinia();
Vue.directive("gradient-icon", gradientIcon);
Vue.directive("gradient-outline", gradientOutline);
for (let { name, component } of GComponents) {
    Vue.component(name, component);
}

Vue.use(router).use(vuetify).use(pinia).use(CKEditor).mount("#app");
