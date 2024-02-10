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
    <v-card class="d-flex pa-4">
        <stage-icon :stage-type="stage.type"> </stage-icon>
        <div class="w-100 mx-6">
            <div>
                {{ stage.title }}
            </div>
            <div class="mt-2 text-grey-darken-2">
                {{ stageTypes[stage.type].description }}
            </div>
        </div>
    </v-card>
</template>
