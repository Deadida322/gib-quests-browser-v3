<script setup>
    import { toRefs, watch } from "vue";
    import StageIcon from "./StageIcon.vue";
    import stageTypes from "@/assets/consts/stageTypes.js";
    const props = defineProps({
        stage: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    });

    const emit = defineEmits(["stage-edit", "update:stage"]);

    const { stage, index } = toRefs(props);

    watch(
        index,
        (val) => {
            emit("update:stage", { ...stage.value, index: val });
        },
        { immediate: true }
    );
</script>

<template>
    <div class="position-relative">
        <v-btn
            icon
            color="error"
            size="small"
            class="d-flex align-center flex-column justify-center position-absolute stage-close">
            <v-icon class="icon"> mdi-close </v-icon>
        </v-btn>
        <v-card elevation="3">
            <v-card-text class="d-flex align-center">
                <stage-icon :stage-type="stage.type"></stage-icon>
                <div class="w-100 mx-6">
                    <v-text-field
                        v-model="stage.title"
                        density="compact"
                        color="primary"
                        clearable
                        variant="outlined">
                    </v-text-field>
                    <v-btn
                        variant="tonal"
                        color="primary"
                        class="action-button"
                        block
                        @click="emit('stage-edit', stage)">
                        {{ stageTypes[stage.type].action }}
                    </v-btn>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<style lang="scss" scoped>
    .w-100 {
        width: 100%;
    }

    .stage-close {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(30%, -30%);
        z-index: 8;

        &:hover {
            transform: scale(1.1) translate(30%, -30%);
        }
    }

    /* stylelint-disable-next-line selector-pseudo-element-no-unknown */
    :deep {
        .action-button {
            .v-btn__content {
                background: $gradient-main;
                background-clip: text;
                color: $primary-tonal;
            }

            &:hover {
                .v-btn__content {
                    color: $primary-tonal-hover;
                }
            }
        }
    }
</style>
