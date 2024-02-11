<script setup>
    import { toRefs } from "vue";
    import stageTypes from "@/assets/consts/stageTypes.js";
    const props = defineProps({
        stageType: {
            type: String,
            required: true
        }
    });

    const { stageType } = toRefs(props);
</script>

<template>
    <g-gradient
        :border-width="2"
        :container-width="64"
        :container-height="64"
        border-radius="50%">
        <v-btn
            icon
            color="primary"
            variant="tonal"
            size="x-large"
            class="d-flex align-center flex-column justify-center">
            <v-icon
                v-gradient-icon="{ degrees: -135 }"
                class="icon"
                size="large">
                {{ stageTypes[stageType].icon }}
            </v-icon>
        </v-btn>
    </g-gradient>
</template>

<style scoped>
    :deep(.v-btn) {
        background-color: rgb(255 255 255);
    }
</style>
