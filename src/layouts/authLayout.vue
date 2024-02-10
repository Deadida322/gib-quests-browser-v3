<script setup></script>

<template>
    <v-app>
        <v-main>
            <div class="d-flex justify-space-around align-center auth-page">
                <slot></slot>
            </div>
        </v-main>
    </v-app>
</template>

<style lang="scss" scoped>
    .auth-page {
        width: 100%;
        height: 100vh;
    }
</style>
