<script setup>
    import { useRoute } from "vue-router";
    import { ref } from "vue";
    import StageItem from "@/components/Stage/StageItem.vue";
    import defaultLayout from "@/layouts/defaultLayout.vue";
    import stageMenu from "@/assets/consts/stageMenu";
    import mockQuest from "@/assets/consts/mockQuest.js";
    import CreateStage from "@/components/Create/CreateStage.vue";

    const route = useRoute();
    const id = ref(route.params.id);
    id;
    const showCreateStage = ref(false);
    const currentStage = ref({});

    const onStageClick = (stage) => {
        currentStage.value = {
            ...stage
        };

        showCreateStage.value = true;
    };

    const onStageSave = (stage) => {
        console.log(stage);
    };

    const quest = ref(mockQuest);
</script>

<template>
    <div class="create">
        <create-stage
            v-model:stage="currentStage"
            v-model="showCreateStage"
            @save-stage="onStageSave"></create-stage>
        <default-layout page-name="Создать квест">
            <router-view>
                <div class="d-flex justify-space-between align-center">
                    <v-btn icon="mdi-arrow-left"> </v-btn>
                    <div class="text--h4">
                        {{ quest.title || "Новый квест" }}
                    </div>
                    <v-btn icon="mdi-file"></v-btn>
                </div>

                <div class="mt-4">
                    <v-text-field
                        v-model="quest.title"
                        color="primary"
                        density="comfortable"
                        placeholder="Как назовём квест"
                        label="Название"
                        prepend-inner-icon="mdi-subtitles"
                        variant="outlined">
                    </v-text-field>
                    <g-editor
                        v-model="quest.description"
                        title="Описание">
                    </g-editor>
                </div>
                <g-image-loader
                    v-model="quest.image"
                    class="mt-2"
                    :height="300"></g-image-loader>
                <p class="text-h5 mt-4">Этапы</p>
                <div class="stages_container">
                    <g-gradient
                        v-for="(_, index) in quest.stages"
                        :key="index"
                        :glow="2"
                        class="my-6"
                        :border-width="1">
                        <stage-item
                            v-model:stage="quest.stages[index]"
                            :index="index"
                            @stage-edit="onStageClick">
                        </stage-item>
                    </g-gradient>
                </div>
                <v-banner
                    elevation="2"
                    class="mt-2 mb-4"
                    lines="1"
                    color="primary"
                    icon="mdi-progress-alert">
                    <v-banner-text>
                        Необходимо добавить хотя бы два этапа для создания
                        квеста
                    </v-banner-text>

                    <v-banner-actions class="mt-2">
                        <v-btn color="primary">Добавить</v-btn>
                    </v-banner-actions>
                </v-banner>
                <g-add
                    :menu-items="stageMenu"
                    @item-click="onStageClick"></g-add>
                <div class="d-flex justify-end mt-2">
                    <v-btn
                        class="mr-2"
                        variant="plain">
                        Отмена
                    </v-btn>
                    <v-btn
                        color="primary"
                        variant="flat"
                        >Сохранить</v-btn
                    >
                </div>
            </router-view>
        </default-layout>
    </div>
</template>
