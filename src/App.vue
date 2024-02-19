<template>
    <v-app>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<style lang="scss">
    body {
        &::-webkit-scrollbar {
            background: transparent;
            width: 6px; /* ширина scrollbar */
            cursor: pointer;
        }

        &::-webkit-scrollbar-track {
            background: transparent; /* цвет дорожки */
            cursor: pointer;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgb(87 39 155 / 40%);
            border-radius: 20px; /* закругления плашки */
            cursor: pointer;
        }
    }
</style>
