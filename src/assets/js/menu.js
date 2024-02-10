export default [
    {
        name: "Главная",
        route: "/",
        icon: "mdi-home"
    },
    {
        name: "О нас",
        route: "/about",
        icon: "mdi-information-outline"
    },
    {
        name: "Создать квест",
        icon: "mdi-format-list-bulleted-square",
        subList: [
            {
                name: "Ваши квесты",
                route: "/lk/my-quests",
                icon: "mdi-format-list-bulleted-square"
            },
            {
                name: "Создать новый",
                route: "/create/new",
                icon: "mdi-loupe"
            }
        ]
    },
    {
        name: "Пройти квест",
        icon: "mdi-play",
        subList: [
            {
                name: "Найти",
                route: "/",
                icon: "mdi-magnify"
            },
            {
                name: "Прогресс",
                route: "/lk",
                icon: "mdi-progress-question"
            }
        ]
    }
];
