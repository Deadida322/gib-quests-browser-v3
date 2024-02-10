<script setup>
    import { ref } from "vue";
    const drawer = ref(false);
    defineProps({
        pageName: {
            type: String,
            default: "Главная"
        },
        md: {
            type: String,
            default: "10"
        }
    });
</script>

<template>
    <v-app>
        <g-drawer v-model="drawer"></g-drawer>
        <g-header
            v-model:drawer="drawer"
            :page-name="pageName"></g-header>

        <v-main class="mt-5 ma-4">
            <v-row>
                <v-col
                    class="pa-0"
                    cols="0"
                    sm="1"
                    :md="(12 - md) / 2"></v-col>
                <v-col
                    cols="12"
                    sm="10"
                    :md="md">
                    <slot></slot>
                </v-col>
                <v-col
                    class="pa-0"
                    cols="0"
                    sm="1"
                    :md="(12 - md) / 2"></v-col>
            </v-row>
        </v-main>
    </v-app>
</template>
