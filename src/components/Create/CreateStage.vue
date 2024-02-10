<script setup>
    import { computed, ref, watch, toRefs } from "vue";
    import types from "@/assets/consts/stageTypes";
    import CreateTextStage from "./CreateTextStage.vue";
    import CreateTestStage from "./Test/CreateTestStage.vue";
    import CreateVideoStage from "./CreateVideoStage.vue";
    import CreateQrStage from "./CreateQrStage.vue";
    import CreateMapStage from "./CreateMapStage.vue";
    import { required } from "@vuelidate/validators";
    import useVuelidate from "@vuelidate/core";
    const emit = defineEmits([
        "update:model-value",
        "update:stage",
        "save-stage"
    ]);
    const formRef = ref(null);
    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: true
        },
        stage: {
            type: Object,
            default: () => {}
        }
    });
    const { stage } = toRefs(props);
    const showDialog = computed({
        get() {
            return props.modelValue;
        },
        set(val) {
            emit("update:model-value", val);
        }
    });

    const editableStage = computed({
        get: () => props.stage,
        set: (val) => emit("update:stage", val)
    });
    const status = computed(() =>
        editableStage.value.index !== undefined ? "Редактировать" : "Добавить"
    );

    const onSaveStage = () => {
        $v.value.$validate();

        if (!$v.value.$invalid) {
            emit("save-stage", editableStage.value);
        }
    };

    const rules = {
        title: {
            required
        }
    };

    const $v = useVuelidate(rules, editableStage);
    const editStatus = ref(false);

    const clear = () => {
        $v.value.$reset();
    };

    const onClose = () => (showDialog.value = false);

    const stageRef = ref(null);

    watch(
        stage,
        (val) => {
            console.log(Number(val.index));
            editStatus.value = !!Number(val.index);
        },
        { immediate: true, deep: true }
    );

    defineExpose({ $v });
</script>

<template>
    <v-dialog
        v-model="showDialog"
        scrollable
        persistent
        max-width="1200">
        <div class="card">
            <v-btn
                class="close-btn"
                color="error"
                size="42"
                icon="mdi-close"
                @click="onClose"></v-btn>
            <v-card>
                <v-card-title>
                    {{ status }}
                    {{ types[editableStage.type].title.toLowerCase() }}
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="scrollable-body">
                    <v-form ref="formRef">
                        <v-text-field
                            v-model="editableStage.title"
                            color="primary"
                            density="comfortable"
                            placeholder="Как назовём этап"
                            label="Название"
                            clearable
                            :error-messages="
                                $v.title.$error ? 'Укажите название' : ''
                            "
                            prepend-inner-icon="mdi-subtitles"
                            variant="outlined"
                            @blur="$v.title.$touch">
                        </v-text-field>
                        <create-text-stage
                            v-if="editableStage.type === 'text'"
                            ref="stageRef"
                            v-model:stage="editableStage"></create-text-stage>
                        <create-video-stage
                            v-else-if="editableStage.type === 'video'"
                            ref="stageRef"
                            v-model:stage="editableStage"></create-video-stage>
                        <create-qr-stage
                            v-else-if="editableStage.type === 'qrCode'"
                            ref="stageRef"
                            v-model:stage="editableStage"></create-qr-stage>
                        <create-test-stage
                            v-else-if="editableStage.type === 'test'"
                            ref="stageRef"
                            v-model:stage="editableStage"></create-test-stage>
                        <create-map-stage
                            v-else-if="editableStage.type === 'map'"
                            ref="stageRef"
                            v-model:stage="editableStage"></create-map-stage>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="clear">Сбросить</v-btn>
                    <v-btn
                        tonal
                        color="primary"
                        variant="tonal"
                        @click="onSaveStage">
                        {{ editStatus ? "Сохранить" : "Добавить" }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </v-dialog>
</template>

<style scoped lang="scss">
    .card {
        position: relative;
    }

    .close-btn {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(30%, -50%);
        z-index: 1;
    }

    .scrollable-body {
        cursor: auto;
        max-height: 80vh;
        overflow: scroll;

        &::-webkit-scrollbar {
            background: transparent;
            width: 8px; /* ширина scrollbar */
            cursor: pointer;
        }

        &::-webkit-scrollbar-track {
            background: transparent; /* цвет дорожки */
            cursor: pointer;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 20px; /* закругления плашки */
            background-color: rgb(220 200 250);
            transition: all 0.2s ease-in-out;

            &:hover {
                cursor: pointer;
                background-color: rgb(113 88 151);
            }
        }
    }
</style>
