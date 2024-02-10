<script setup>
    import { computed, ref, watch, toRefs } from "vue";
    import testTypes from "@/assets/consts/testTypes";
    import testMenu from "@/assets/consts/testMenu";
    import SingleQuestion from "@/components/Create/Test/SingleQuestion.vue";
    import InsertQuestion from "@/components/Create/Test/InsertQuestion.vue";
    import MultipleQuestion from "@/components/Create/Test/MultipleQuestion.vue";
    import OrderQuestion from "@/components/Create/Test/OrderQuestion.vue";
    import useVuelidate from "@vuelidate/core";
    import { required } from "@vuelidate/validators";

    const certainRef = ref(null);

    const cardRef = ref(null);

    const emit = defineEmits(["update:model-value", "question-delete"]);

    const props = defineProps({
        modelValue: {
            type: Object,
            required: true
        },
        isDragging: {
            type: Boolean,
            default: false
        },
        order: {
            type: Number,
            required: true
        }
    });

    const { order, modelValue } = toRefs(props);

    const editableQuestion = computed({
        get: () => props.modelValue,
        set: (val) => emit("update:model-value", val)
    });

    const addVariant = () => editableQuestion.value.answers.push("");

    const removeVariant = (index) =>
        editableQuestion.value.answers.splice(index, 1);

    const minimise = () => cardRef.value?.minimise();

    const expand = () => cardRef.value?.expand();

    const onQuestionDelete = () => emit("question-delete");

    watch(order, (val) => (editableQuestion.value.order = val), {
        immediate: true
    });

    const rules = computed(() => ({
        title: {
            required
        }
    }));

    const $v = useVuelidate(rules, modelValue);

    defineExpose({ minimise, expand, $v });
</script>
<template>
    <g-window-card
        ref="cardRef"
        :is-error="$v.$error"
        :title="testTypes[editableQuestion.type].action"
        :minimise-title="editableQuestion.title"
        class="ma-2 mt-6 question-container"
        :glow="isDragging ? 3 : 0"
        @delete="onQuestionDelete">
        <template #prepend>
            <v-btn
                v-gradient-icon
                class="handle"
                variant="tonal"
                color="primary"
                density="comfortable"
                :class="{ wiggling: isDragging }"
                :icon="
                    !isDragging
                        ? 'mdi-' + testTypes[editableQuestion.type].icon
                        : 'mdi-drag-horizontal-variant'
                "></v-btn>
        </template>
        <template #default>
            <v-text-field
                v-model="editableQuestion.title"
                color="primary"
                density="comfortable"
                placeholder="Ваш вопрос"
                label="Вопрос"
                clearable
                prepend-inner-icon="mdi-message-question"
                variant="outlined"
                :error-messages="$v.title.$error ? 'Укажите вопрос' : ''"
                @blur="$v.title.$touch()">
            </v-text-field>
            <v-select
                v-model="editableQuestion.type"
                class="mt-3"
                color="primary"
                density="comfortable"
                placeholder="Тип вопроса"
                label="Тип"
                clearable
                item-value="type"
                :items="testMenu"
                prepend-inner-icon="mdi-help-box"
                variant="outlined"></v-select>
            <v-divider class="mb-4"></v-divider>
            <single-question
                v-if="editableQuestion.type === 'single'"
                ref="certainRef"
                v-model="editableQuestion"
                @variant-remove="removeVariant"></single-question>
            <multiple-question
                v-if="editableQuestion.type === 'multiple'"
                ref="certainRef"
                v-model="editableQuestion"
                @variant-remove="removeVariant"></multiple-question>
            <insert-question
                v-if="editableQuestion.type === 'insert'"
                ref="certainRef"
                v-model="editableQuestion"></insert-question>
            <order-question
                v-if="editableQuestion.type === 'order'"
                ref="certainRef"
                v-model="editableQuestion"
                @variant-remove="removeVariant"></order-question>
            <div
                v-if="editableQuestion.type !== 'insert'"
                class="d-flex justify-center">
                <v-btn
                    tonal
                    color="primary"
                    variant="tonal"
                    @click="addVariant">
                    + Вариант</v-btn
                >
            </div>
        </template>
    </g-window-card>
</template>

<style lang="scss" scoped>
    .question-container {
        position: relative;
        overflow: visible;
    }

    .red-border {
        border-bottom: 2px solid rgb(var(--v-theme-error));
    }

    .trash-btn {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
    }

    @keyframes wiggle {
        0% {
            transform: rotate(0deg) translate(0, 0);
        }

        80% {
            transform: rotate(0deg) translate(0, 2px);
        }

        85% {
            transform: rotate(5deg) translate(1px, 4px);
        }

        95% {
            transform: rotate(-5deg) translate(3px, 1px);
        }

        100% {
            transform: rotate(0deg) translate(1px, 1px);
        }
    }

    .wiggling {
        display: inline-block;
        animation: wiggle 1s infinite;
    }
</style>
