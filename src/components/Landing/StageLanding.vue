<script setup>
    defineProps({
        stage: {
            default: () => {},
            type: Object,
            required: true
        }
    });
</script>

<template>
    <g-card class="pa-sm-4 pa-0 pa-md-4 position-relative card">
        <v-chip
            class="chip"
            :class="{
                chip_green: stage.status == 'Скоро',
                chip_amber: stage.status == 'В разработке'
            }"
            >{{ stage.status }}</v-chip
        >
        <v-card-title class="text-deep-purple">{{ stage.title }}</v-card-title>
        <v-card-text class="g-card-body d-flex mt-sm-4 mt-0 align-center">
            <v-btn
                v-gradient-icon
                rounded
                class="stage-landing__icon"
                variant="tonal"
                color="primary">
                <v-icon size="40">mdi-{{ stage.icon }}</v-icon>
            </v-btn>
            <div class="ml-4 ml-sm-6 text-blue-grey-lighten-1">
                {{ stage.description }}
            </div>
        </v-card-text>
    </g-card>
</template>

<style lang="scss" scoped>
    .chip {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(8px, -50%);
        color: rgb(253 253 253);

        &_green {
            background-color: rgb(102 187 106) !important;
        }

        &_amber {
            background-color: rgb(255 213 79) !important;
        }
    }

    .stage-landing__icon {
        max-width: 50px !important;
        height: 50px;
        min-width: 50px !important;
        padding: 0 !important;
        pointer-events: none;

        ::v-deep(i) {
            font-size: 24px !important;
        }

        @media screen and (width >= 600px) {
            max-width: 80px !important;
            height: 80px;
            min-width: 80px !important;
            padding: 0 !important;

            ::v-deep(i) {
                font-size: 40px !important;
            }
        }
    }

    ::v-deep(.v-card) {
        overflow: visible;
    }

    ::v-deep(.v-btn--size-default) {
        padding: 0 !important;
    }

    ::v-deep(.v-chip) {
        background-color: rgb(179 157 219);
    }
</style>
