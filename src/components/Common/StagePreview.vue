<script setup>
    import StageIcon from "../Stage/StageIcon.vue";
    import stageTypes from "@/assets/consts/stageTypes.js";
    defineProps({
        stage: {
            type: Object,
            required: true,
            default: () => {}
        }
    });
</script>

<template>
    <v-card class="d-flex pa-3 pa-sm-4 align-center">
        <stage-icon
            class="stage-icon"
            :stage-type="stage.type">
        </stage-icon>
        <div class="w-100 mx-sm-6 mx-4 mr-0">
            <div>
                {{ stage.title }}
            </div>
            <div class="mt-2 text-grey-darken-2">
                {{ stageTypes[stage.type].description }}
            </div>
        </div>
    </v-card>
</template>

<style lang="scss" scoped>
    .stage-icon {
        @media screen and (width <= 600px) {
            width: 48px !important;
            height: 48px !important;

            ::v-deep(button) {
                height: 48px !important;
            }

            ::v-deep(i) {
                width: 12px !important;
            }
        }
    }
</style>
