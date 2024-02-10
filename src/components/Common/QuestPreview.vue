<script setup>
    defineProps({
        quest: {
            type: Object,
            required: true
        },
        editable: {
            type: Boolean,
            default: false,
            required: false
        }
    });

    const menu = [
        {
            title: "Отслеживать",
            icon: "mdi-eye-outline",
            to: "lk/watch/"
        },
        {
            title: "Редактировать",
            icon: "mdi-pencil-outline",
            to: "/create/"
        },
        {
            title: "Удалить",
            icon: "mdi-trash-can-outline",
            to: "/create/"
        }
    ];
</script>

<template>
    <v-card
        color="#eceff128"
        elevation="1"
        class="quest-preview">
        <v-img
            :src="quest.image"
            gradient="to bottom,rgba(0,0,0,0.2), rgba(0,0,0,0.6)"
            class="g__image_rb"
            cover
            :height="200">
            <div class="quest-preview__img">
                <v-card-title
                    class="quest-preview__title text-overline text-deep-purple-lighten-4">
                    {{ quest.title }}
                </v-card-title>
            </div>
        </v-img>
        <v-card-text>
            <div
                class="text-deep-purple-darken-2 text-body-1"
                v-html="quest.description"></div>
        </v-card-text>
        <v-card-actions class="ma-2">
            <v-spacer></v-spacer>
            <v-menu
                v-if="editable"
                location="bottom">
                <template #activator="{ props }">
                    <v-icon
                        color="primary"
                        class="mr-4"
                        v-bind="props">
                        mdi-dots-vertical
                    </v-icon>
                </template>
                <v-list>
                    <v-list-item
                        v-for="(item, index) in menu"
                        :key="index"
                        v-gradient-icon
                        :prepend-icon="item.icon"
                        :value="index">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <g-gradient
                :border-width="0.5"
                border-radius="5px"
                :container-width="146"
                :container-height="36"
                :glow="5">
                <v-btn
                    class="quest-preview__button"
                    variant="flat"
                    :to="`/preview/${quest.id}`">
                    <div class="text-deep-purple-darken-2">Предпросмотр</div>
                </v-btn>
            </g-gradient>
        </v-card-actions>
    </v-card>
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

        &__title {
            font-size: 60px !important;
        }

        &__button {
            background-color: white;
        }
    }
</style>
