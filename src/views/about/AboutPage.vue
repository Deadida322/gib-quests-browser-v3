<script setup>
    import logo from "@/assets/logo.png";
    import background from "@/assets/landing.jpg";
    import SectionContainer from "@/components/Landing/SectionContainer.vue";
    import { stages, watches, updates } from "@/assets/consts/landing.js";
    import StageLanding from "@/components/Landing/StageLanding.vue";
    import WatchLanding from "@/components/Landing/WatchLanding.vue";
    import UpdateLanding from "@/components/Landing/UpdateLanding.vue";
</script>

<template>
    <div class="about">
        <v-parallax>
            <v-img
                class="g__image_rb about-image"
                height="500"
                height-md="750"
                cover
                gradient="to bottom,rgba(33,29,82,0.7), rgba(73,79,113,0.8)"
                :src="background">
                <div
                    class="about__image-container pt-12 justify-center d-flex align-center flex-column">
                    <img
                        width="250"
                        :src="logo"
                        alt="" />
                    <h1 class="mt-6 mb-6 text-body-1 text-white">
                        Приложение к вашему празднику
                    </h1>
                    <div class="flex mt-4">
                        <v-btn
                            color="white"
                            disabled
                            width="148"
                            prepend-icon="mdi-download-circle"
                            class="mr-4">
                            Скачать
                        </v-btn>
                        <v-btn
                            class="text-white"
                            to="/auth/reg"
                            width="148"
                            color="primary">
                            Попробовать
                        </v-btn>
                    </div>
                </div>
            </v-img>
        </v-parallax>
        <section-container>
            <div
                class="text-sm-h6 text-subtitle-1 mt-4 mt-sm-10 pt-0 pt-sm-4 pb-0 pb-sm-4 mb-4 mb-sm-10 text-center text-blue-grey-darken-1">
                Сервис
                <span class="text-deep-purple">QuestsGib</span> создан для
                вашего настроения и настроения ваших близких. Приложение
                предоставляет доступ к созданию и проведению квестов и викторин
                совершенно разной направленности: от подарка до образовательной
                программы.
            </div>
        </section-container>
        <section-container tonal>
            <h2
                class="text-h5 text-sm-h3 mt-0 mt-sm-8 mb-8 text-grey-darken-3 text-center">
                Широкий список этапов
            </h2>
            <div
                class="d-flex justify-space-between flex-wrap stages-container">
                <div
                    v-for="stage in stages"
                    :key="stage.title"
                    class="w-50-100">
                    <stage-landing :stage="stage"></stage-landing>
                </div>
            </div>

            <div class="d-flex justify-center mt-6 mb-4">
                <v-btn
                    href="https://vk.com"
                    variant="tonal"
                    color="primary">
                    <v-icon
                        class="mr-2"
                        end
                        dark>
                        mdi-playlist-plus
                    </v-icon>
                    Предложить идею
                </v-btn>
            </div>
        </section-container>
        <section-container class="pb-4">
            <h2
                class="text-h5 text-sm-h3 mt-0 mt-sm-8 mb-8 text-grey-darken-3 text-center">
                Возможность отследить квест
            </h2>
            <div class="watch_container">
                <watch-landing
                    v-for="(watch, index) in watches"
                    :key="index + 'watches'"
                    class="mt-6"
                    :watch="watch"></watch-landing>
            </div>
            <div
                class="text-sm-h6 text-subtitle-1 mt-5 pt-4 pb-4 mb-5 text-center text-blue-grey-darken-1">
                А также удобный личный кабинет для просмотра своих созданных и
                пройденных квестов
            </div>
            <div class="d-flex justify-center mt-2 mb-2">
                <v-btn
                    variant="tonal"
                    to="/auth/reg"
                    color="primary">
                    <v-icon
                        class="mr-2"
                        end
                        dark>
                        mdi-account-multiple-plus
                    </v-icon>
                    Попробовать
                </v-btn>
            </div>
        </section-container>
        <section-container
            class="pb-4"
            tonal>
            <h2
                class="text-h5 text-sm-h3 mt-0 mt-sm-8 mb-8 text-grey-darken-3 text-center">
                Следующие обновления
            </h2>
            <div
                class="d-flex justify-space-between flex-wrap updates-container">
                <div
                    v-for="update in updates"
                    :key="update.title"
                    class="w-50-100">
                    <update-landing :update="update"></update-landing>
                </div>
            </div>
            <div class="d-flex justify-center mt-6 mb-0 mb-sm-6">
                <v-btn
                    href="https://vk.com"
                    variant="tonal"
                    color="primary">
                    <v-icon
                        class="mr-2"
                        end
                        dark>
                        mdi-playlist-plus
                    </v-icon>
                    Предложить идею
                </v-btn>
            </div>
        </section-container>
    </div>
</template>

<style lang="scss" scoped>
    .w-50-100 {
        width: calc(50% - 13px) !important;

        @media screen and (width <= 1200px) {
            width: 100% !important;
        }
    }

    .updates-container,
    .stages-container {
        gap: 26px;
    }

    .about {
        overflow: hidden;

        &__image-container {
            height: 90%;
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

    .about-image {
        height: 750px !important;

        @media screen and (width <= 600px) {
            height: 500px !important;
        }
    }
</style>
