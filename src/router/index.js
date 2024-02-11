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
        component: Home,
        meta: { title: "Найти квест" }
    },
    {
        path: "/lk/my-quests",
        name: "MyQuests",
        component: MyQuests,
        meta: { title: "Мои квесты" }
    },
    {
        path: "/create/:id",
        name: "Create",
        component: Create,
        meta: { title: "Создать новый" }
    },
    {
        path: "/auth/login",
        name: "login",
        component: LoginPage,
        meta: { title: "Войти" }
    },
    {
        path: "/auth/reg",
        name: "Reg",
        component: RegPage,
        meta: { title: "Создать аккаунт" }
    },
    {
        path: "/lk",
        name: "LK",
        component: LkPage,
        meta: { title: "Личный кабинет" }
    },
    {
        path: "/about",
        name: "About",
        component: AboutPage,
        meta: { title: "О нас" }
    },
    {
        path: "/preview/:id",
        name: "Preview",
        component: PreviewPage,
        meta: { title: "Предпросмотр" }
    },
    {
        path: "/process/:id",
        name: "Process",
        component: ProcessPage,
        meta: { title: "Пройти" }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
