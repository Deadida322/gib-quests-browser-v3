import { createApp, nextTick } from "vue";
import App from "./App.vue";
import router from "./router";
/* stylelint-disable */
import CKEditor from "@ckeditor/ckeditor5-vue";
import { loadFonts } from "./plugins/webfontloader";
import { GComponents } from "@/components/UI";
import gradientIcon from "@/directives/gradientIcon";
import gradientOutline from "@/directives/gradientOutline";

import "@mdi/font/css/materialdesignicons.css";
import vuetify from "@/plugins/vuetify";

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

router.beforeEach((to) => {
    nextTick(() => {
        console.log(to);
        document.title = to.meta.title || "Gib-Quests";
    });
});
