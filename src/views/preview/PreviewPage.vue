<!-- eslint-disable vue/no-v-html -->
<script setup>
    import defaultLayout from "@/layouts/defaultLayout.vue";
    import { useRouter } from "vue-router";
    import mockQuest from "../../assets/consts/mockQuest";
    import StagePreview from "@/components/Common/StagePreview.vue";
    let quest = mockQuest;
    const router = useRouter();

    if (localStorage.getItem("isStarted")) {
        router.push("/process/karisha");
    }

    const startStage = () => localStorage.setItem("isStarted", true);
</script>

<template>
    <default-layout page-name="Предпросмотр">
        <v-card class="mt--8">
            <v-parallax>
                <v-img
                    height="600"
                    cover
                    class="g__image_rb quest-preview__img-container"
                    gradient="to bottom,rgba(33,29,82,0.2), rgba(73,79,113,0.8)"
                    :src="quest.image">
                    <div class="quest-preview__img">
                        <v-card-title
                            class="quest-preview__title text-overline text-deep-purple-lighten-4">
                            {{ quest.title }}
                        </v-card-title>
                    </div>
                </v-img>
            </v-parallax>

            <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
            <v-card-text v-html="quest.description"></v-card-text>

            <div class="d-flex justify-space-between mr-4">
                <v-card-title
                    >Этапы
                    <v-chip
                        size="small"
                        class="ml-2"
                        color="primary"
                        >{{ quest.stages.length }}</v-chip
                    >
                </v-card-title>
                <div class="d-flex">
                    <v-btn
                        class="mr-2"
                        icon>
                        <v-icon>mdi-share</v-icon>
                    </v-btn>
                    <v-btn
                        v-gradient-icon
                        icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                </div>
            </div>

            <div class="quest-preview__stages ma-1 pa-1">
                <stage-preview
                    v-for="(stage, index) in quest.stages"
                    :key="index"
                    :stage="stage"
                    class="stage-preview mt-2"></stage-preview>
            </div>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    variant="tonal"
                    :to="`/process/${quest.id}`"
                    @click="startStage"
                    >Начать квест</v-btn
                >
            </v-card-actions>
        </v-card>
    </default-layout>
</template>

<style lang="scss" scoped>
    .quest-preview {
        &__img {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__img-container {
            @media screen and (width <= 600px) {
                height: 250px !important;
            }
        }

        &__title {
            font-size: 60px !important;

            @media screen and (width <= 600px) {
                font-size: 36px !important;
                max-width: 100%;
                text-align: center;
                white-space: wrap !important;
                line-height: 40px;
            }
        }

        &__button {
            background-color: white;
        }

        &__stages {
            margin-top: 30px;
            max-height: 400px;
            @media screen and (width <= 600px) {
                max-height: none;
            }

            overflow-y: scroll;
            margin-bottom: 10px;
            gap: 10px;
            display: flex;
            flex-wrap: wrap;

            &::-webkit-scrollbar {
                background: transparent;
                width: 6px;
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
    }

    .stage-preview {
        width: calc(50% - 5px);
        @media screen and (width <= 600px) {
            width: 100%;
        }
    }

    :deep {
        .v-responsive__content {
            z-index: 3;
        }

        .v-img__gradient {
            z-index: 2;
        }

        .v-img__img {
            z-index: 1;
        }
    }
</style>
