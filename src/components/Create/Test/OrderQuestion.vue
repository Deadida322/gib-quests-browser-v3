<!-- eslint-disable vue/html-indent -->
<script setup>
    import { computed, watch } from "vue";
    import { useVuelidate } from "@vuelidate/core";
    import { required, helpers, minLength } from "@vuelidate/validators";
    import draggable from "vuedraggable";
    const emit = defineEmits(["update:model-value", "variant-remove"]);

    const props = defineProps({
        modelValue: {
            type: Object,
            required: true
        }
    });

    const removeVariant = (index) => {
        emit("variant-remove", index);
    };

    const editableQuestion = computed({
        get() {
            return props.modelValue;
        },
        set(val) {
            emit("update:model-value", val);
        }
    });

    const validatableQuestion = computed(() => ({
        ...props.modelValue,
        answers: editableQuestion.value.answers.map((title) => ({ title }))
    }));

    const draggableAnswers = computed({
        get: () =>
            editableQuestion.value.answers.map((item, key) => ({
                title: item,
                key: key
            })),
        set: (val) => {
            editableQuestion.value.answers = val.map((item) => item.title);
        }
    });

    const rules = {
        answers: {
            required,
            minLength: minLength(2),
            $each: helpers.forEach({
                title: {
                    required: helpers.withMessage("Укажите ответ", required)
                }
            })
        }
    };

    watch(editableQuestion.value.answers, (val) => {
        editableQuestion.value.rightAnswers = val;
    });

    const $v = useVuelidate(rules, validatableQuestion);
    defineExpose({ $v });
</script>

<template>
    <draggable
        v-model="draggableAnswers"
        handle=".handle"
        ghost-class="ghost"
        item-key="key">
        <template #item="{ index }">
            <v-fade-transition leave-absolute>
                <div class="d-flex">
                    <v-icon class="handle mt-3"
                        >mdi-drag-horizontal-variant</v-icon
                    >
                    <v-text-field
                        v-model="editableQuestion.answers[index]"
                        class="textfield ml-2 mb-3"
                        color="primary"
                        density="comfortable"
                        placeholder="Вариант ответа"
                        :label="'Вариант ' + (index + 1)"
                        clearable
                        :rules="[(value) => (!value ? 'Укажите вопрос' : true)]"
                        variant="outlined"
                        @blur="$v.$touch()">
                    </v-text-field>

                    <v-btn
                        size="small"
                        icon-color="danger"
                        class="mt-1 ml-2"
                        variant="flat"
                        icon="mdi-minus"
                        @click="removeVariant(index)"></v-btn>
                </div>
            </v-fade-transition>
        </template>
    </draggable>
    <div
        v-if="$v.answers.minLength.$invalid"
        class="text-error text-center mb-4">
        Укажите более 1 варианта
    </div>
    <div
        v-if="$v.answers.$each.$invalid"
        class="text-error text-center mb-4">
        Варианты не могут быть пустыми
    </div>
</template>

<style scoped lang="scss">
    .radio {
        height: 50px;
    }

    .handle {
        cursor: pointer;
    }

    .textfield {
        width: 100%;
    }

    .ghost {
        opacity: 0.2;
        transform: translateX(20px);
        background-color: azure;
        border-radius: 4px;
    }
</style>
