<script setup>
    defineProps({
        update: {
            default: () => {},
            type: Object,
            required: true
        }
    });
</script>

<template>
    <g-card class="pa-1 pa-sm-4 card">
        <v-card-title class="text-deep-purple">{{ update.title }}</v-card-title>
        <v-card-text class="g-card-body d-flex mt-4 align-center">
            <v-btn
                v-gradient-icon
                rounded
                class="update-landing__icon"
                variant="tonal"
                color="primary">
                <v-icon size="40">mdi-{{ update.icon }}</v-icon>
            </v-btn>
            <div class="ml-4 ml-sm-6 text-blue-grey-lighten-1">
                {{ update.description }}
            </div>
        </v-card-text>
    </g-card>
</template>

<style lang="scss" scoped>
    ::v-deep(.v-card) {
        overflow: visible;
    }

    .update-landing__icon {
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
</style>
