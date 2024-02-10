<script setup>
    import defaultLayout from "@/layouts/defaultLayout.vue";
    import { mockQuestArray } from "../../assets/consts/mockQuest";
    import QuestPreview from "@/components/Common/QuestPreview.vue";
</script>

<template>
    <div class="my-quests-page">
        <default-layout page-name="Мои квесты">
            <div class="text-caption text-primary mb-3">Созданные</div>
            <g-search-bar></g-search-bar>
            <div class="horizontal-scroll mt-4">
                <quest-preview
                    v-for="(quest, index) in mockQuestArray"
                    :key="index"
                    editable
                    class="mt-3 preview-quest"
                    :quest="quest"></quest-preview>
                <g-add class="mt-3 preview-quest"></g-add>
            </div>
            <div class="text-caption text-primary mb-3 mt-5">Проходимые</div>
            <g-search-bar></g-search-bar>
            <div class="horizontal-scroll mt-4">
                <quest-preview
                    v-for="(quest, index) in mockQuestArray"
                    :key="index"
                    class="mt-3 preview-quest"
                    :quest="quest"></quest-preview>
                <g-add class="mt-3 preview-quest"></g-add>
            </div>
        </default-layout>
    </div>
</template>

<style scoped lang="scss">
    ::v-deep(.v-field) {
        box-shadow: none;
    }

    .preview-quest {
        min-width: 500px;
    }

    .horizontal-scroll {
        overflow-x: scroll;
        display: flex;
        padding-bottom: 10px;
        padding-left: 1px;
        padding-right: 2px;
        gap: 10px;

        &::-webkit-scrollbar {
            background: transparent;
            height: 6px;
            cursor: pointer;
        }

        &::-webkit-scrollbar-track {
            background: transparent;
            cursor: pointer;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgb(87 39 155 / 40%);
            border-radius: 20px;
            cursor: pointer;
        }
    }
</style>
