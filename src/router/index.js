import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage.vue";
import Create from "@/views/create/CreatePage.vue";
import LoginPage from "@/views/auth/LoginPage.vue";
import RegPage from "@/views/auth/RegPage.vue";
import MyQuests from "@/views/lk/MyQuestsPage.vue";
import LkPage from "@/views/lk/LkPage.vue";
import PreviewPage from "@/views/preview/PreviewPage.vue";
import AboutPage from "@/views/about/AboutPage.vue";
import ProcessPage from "@/views/process/ProcessPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/lk/my-quests",
        name: "MyQuests",
        component: MyQuests
    },
    {
        path: "/create/:id",
        name: "Create",
        component: Create
    },
    {
        path: "/auth/login",
        name: "login",
        component: LoginPage
    },
    {
        path: "/auth/reg",
        name: "Reg",
        component: RegPage
    },
    {
        path: "/lk",
        name: "LK",
        component: LkPage
    },
    {
        path: "/about",
        name: "About",
        component: AboutPage
    },
    {
        path: "/preview/:id",
        name: "Preview",
        component: PreviewPage
    },
    {
        path: "/process/:id",
        name: "Process",
        component: ProcessPage
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
