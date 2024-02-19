<script setup>
    import { ref } from "vue";
    import defaultLayout from "@/layouts/defaultLayout.vue";
    import QuestPreview from "@/components/Common/QuestPreview.vue";
    import mockQuest from "@/assets/consts/mockQuest";
    import { useRouter } from "vue-router";
    const router = useRouter();
    const form = ref({});
</script>

<template>
    <default-layout page-name="Личный кабинет">
        <g-expandable-card
            is-opened
            title="Общая информация">
            <g-image-loader
                v-model="form.avatar"
                class="mt-1 mb-4"></g-image-loader>
            <v-text-field
                v-model="form.name"
                color="primary"
                density="comfortable"
                placeholder="Укажите ваше имя"
                label="Имя"
                variant="outlined" />
            <v-text-field
                v-model="form.surname"
                color="primary"
                density="comfortable"
                placeholder="Укажите вашу фамилию"
                label="Фамилия"
                variant="outlined" />
            <div class="d-flex">
                <v-spacer></v-spacer>
                <v-btn
                    variant="tonal"
                    color="primary"
                    >Сохранить</v-btn
                >
            </div>
        </g-expandable-card>
        <g-expandable-card
            title="Авторизационные данные"
            class="mt-2">
            <v-text-field
                v-model="form.email"
                class="mt-4"
                color="primary"
                type="email"
                density="comfortable"
                placeholder="Укажите почту"
                label="Почта"
                variant="outlined" />
            <v-text-field
                v-model="form.login"
                color="primary"
                density="comfortable"
                placeholder="Придумайте логин"
                label="Логин"
                variant="outlined" />
            <v-text-field
                v-model="form.password"
                color="primary"
                type="password"
                class="mt-2"
                password
                density="comfortable"
                placeholder="Введите пароль"
                label="Пароль"
                variant="outlined" />
            <v-text-field
                v-model="form.password"
                color="primary"
                type="password"
                class="mt-2"
                password
                density="comfortable"
                placeholder="Повторитте пароль"
                label="Повторитте пароль"
                variant="outlined" />
            <div class="d-flex">
                <v-spacer></v-spacer>
                <v-btn
                    variant="tonal"
                    color="primary"
                    >Сохранить</v-btn
                >
            </div>
        </g-expandable-card>
        <g-expandable-card
            is-opened
            title="Текущий прогресс квестов">
            <div class="d-flex justify-space-between mt-2 flex-wrap">
                <quest-preview
                    v-for="(quest, index) in [mockQuest]"
                    :key="index"
                    class="mb-3 quest"
                    :quest="quest"></quest-preview>
                <g-add
                    class="quest mb-3"
                    icon="magnify"
                    @icon-click="router.push('/')"></g-add>
            </div>
        </g-expandable-card>
    </default-layout>
</template>

<style lang="scss" scoped>
    .quest {
        width: 49%;
        @media screen and (width <= 600px) {
            width: 100%;
        }
    }
</style>
