<script setup>
    import { ref } from "vue";
    import { RouterLink } from "vue-router";
    import AuthLayout from "@/layouts/authLayout.vue";
    const form = ref({});
</script>

<template>
    <auth-layout>
        <g-gradient
            border-width="0"
            border-radius="4px"
            :container-width="500"
            :glow="4">
            <v-card width="100%">
                <v-card-title class="text-deep-purple-darken-4 pb-0"
                    >Вход</v-card-title
                >
                <v-card-text class="pa-3 pa-sm-4">
                    <v-text-field
                        v-model="form.login"
                        color="primary"
                        density="comfortable"
                        placeholder="Электронная почта"
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
                    <router-link to="/auth/recovery">
                        <span class="text-primary">Забыли пароль?</span>
                    </router-link>
                </v-card-text>
                <v-card-actions class="pt-0">
                    <v-spacer></v-spacer>
                    <v-btn
                        to="/auth/reg"
                        variant="text"
                        >Регистрация</v-btn
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
</template>
