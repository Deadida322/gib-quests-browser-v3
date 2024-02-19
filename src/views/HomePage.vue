<script setup>
    // @ is an alias to /src
    import defaultLayout from "@/layouts/defaultLayout.vue";
    import QuestPreview from "@/components/Common/QuestPreview.vue";
    import { mockQuestArray } from "@/assets/consts/mockQuest";
</script>

<template>
    <div class="home">
        <default-layout>
            <g-search-bar></g-search-bar>
            <g-expandable-card title="Фильтры"></g-expandable-card>

            <div class="text-body-1 mt-4">
                Найдено квестов:
                <v-chip
                    variant="tonal"
                    color="primary"
                    class="ml-3"
                    size="small"
                    >{{ mockQuestArray.length }}</v-chip
                >
            </div>
            <div class="quest-container mt-4">
                <quest-preview
                    v-for="(quest, index) in mockQuestArray"
                    :key="index"
                    class="quest-preview"
                    :quest="quest"></quest-preview>
            </div>
            <div class="d-flex justify-center mt-8">
                <v-btn
                    variant="tonal"
                    color="primary"
                    >Показать ещё</v-btn
                >
            </div>
        </default-layout>
    </div>
</template>

<style lang="scss" scoped>
    ::v-deep(.v-field) {
        box-shadow: none;
    }

    ::v-deep(.v-expansion-panel__shadow) {
        box-shadow: none;
    }

    ::v-deep(.v-expansion-panel-title--active) {
        background: $gradient-main-transparent;
    }

    ::v-deep(.v-expansion-panel-title) {
        transition: all ease-in-out 0.5s;
    }

    ::v-deep(.v-expansion-panel-title__overlay) {
        opacity: 0 !important;
    }

    .quest-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;

        .quest-preview {
            width: calc(50% - 5px);
            @media screen and (width <= 600px) {
                width: 100%;
            }
        }
    }
</style>
