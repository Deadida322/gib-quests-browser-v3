<script setup>
    import authLayout from "@/layouts/authLayout.vue";
    import { ref } from "vue";

    const form = ref({});
</script>

<template>
    <div class="reg-page">
        <auth-layout>
            <g-gradient
                border-width="0"
                border-radius="4px"
                :container-width="600"
                :glow="4">
                <v-card width="600">
                    <v-card-title class="text-deep-purple-darken-4 mb-2"
                        >Регистрация</v-card-title
                    >
                    <v-card-text>
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
                        <v-text-field
                            v-model="form.email"
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
                    </v-card-text>
                    <v-card-actions class="pt-0">
                        <v-spacer></v-spacer>
                        <v-btn
                            to="/auth/login"
                            variant="text"
                            >Уже есть аккаунт</v-btn
                        >
                        <v-btn
                            variant="tonal"
                            color="primary"
                            >Войти</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </g-gradient>
        </auth-layout>
    </div>
</template>
