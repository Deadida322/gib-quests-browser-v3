<script setup>
    import defaultLayout from "@/layouts/defaultLayout.vue";
    import mockQuest from "@/assets/consts/mockQuest";
</script>

<template>
    <default-layout
        md="8"
        page-name="Прохождение">
        <div class="process-page">
            <div class="d-flex justify-space-between align-center">
                <v-btn icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-chip
                    class="pa-5"
                    color="primary"
                    ><h1 class="text-center text-h6">
                        {{ mockQuest.title }}
                    </h1></v-chip
                >
                <v-btn icon>
                    <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </div>
            <div class="d-flex justify-center">
                <v-card
                    class="mt-8"
                    width="100%">
                    <v-card-title>{{ mockQuest.stages[0].title }}</v-card-title>
                </v-card>
            </div>
            <g-progressbar
                class="progress-bar"
                model-value="80"></g-progressbar>
        </div>
    </default-layout>
</template>

<style lang="scss" scoped>
    .progress-bar {
        position: fixed !important;
        bottom: 12px;
        left: 15vw;
        width: 70vw !important;
    }
</style>
