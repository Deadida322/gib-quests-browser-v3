<script setup>
    import { computed, watch } from "vue";
    import { useVuelidate } from "@vuelidate/core";
    import { required, helpers, minLength } from "@vuelidate/validators";
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

    watch(editableQuestion.value.answers, (val) => {
        editableQuestion.value.rightAnswers =
            editableQuestion.value.rightAnswers.filter(
                (item) => val.indexOf(item) !== -1
            );
    });

    const validatableQuestion = computed(() => ({
        ...props.modelValue,
        answers: editableQuestion.value.answers.map((title) => ({ title })),
        rightAnswers: editableQuestion.value.rightAnswers.map((title) => ({
            title
        }))
    }));

    const uniqAnswers = computed(() => [
        ...new Set(editableQuestion.value.answers)
    ]);

    const rules = {
        answers: {
            required,
            minLength: minLength(2),
            $each: helpers.forEach({
                title: {
                    required: helpers.withMessage("Укажите ответ", required)
                }
            })
        },
        rightAnswers: {
            required,
            $each: helpers.forEach({
                title: {
                    required: helpers.withMessage("Укажите ответ", required)
                }
            })
        }
    };

    const $v = useVuelidate(rules, validatableQuestion);

    const answerErrors = computed(
        () => $v.value.answers.$each.$response.$errors
    );
    defineExpose({ $v });
</script>

<template>
    <div
        v-for="(_, index) in editableQuestion.answers"
        :key="'answer' + index"
        class="d-flex">
        <v-text-field
            v-model="editableQuestion.answers[index]"
            class="textfield ml-2 mb-3"
            color="primary"
            density="comfortable"
            placeholder="Вариант ответа"
            :label="'Вариант ' + (index + 1)"
            clearable
            variant="outlined"
            :error-messages="answerErrors[index]?.title[0]?.$message"
            @blur="$v.answers.$touch()">
        </v-text-field>

        <v-btn
            size="small"
            icon-color="danger"
            class="mt-1 ml-2"
            variant="flat"
            icon="mdi-minus"
            @click="removeVariant(index)"></v-btn>
    </div>
    <v-alert
        v-if="$v.answers.minLength.$invalid"
        variant="tonal"
        type="error"
        title="Ошибка"
        class="ma-2 mt-0 mb-4"
        prominent>
        Укажите более 1 варианта ответа
    </v-alert>
    <v-divider class="mb-3"></v-divider>
    <v-select
        v-model="editableQuestion.rightAnswers[0]"
        class="textfield ml-2"
        color="primary"
        :items="uniqAnswers"
        density="comfortable"
        placeholder="Верный ответ"
        label="Верный ответ"
        clearable
        :error-messages="$v.rightAnswers.$error ? 'Укажите верный ответ' : ''"
        variant="outlined"
        @blur="$v.rightAnswers.$touch()"></v-select>
</template>

<style scoped lang="scss">
    .radio {
        height: 50px;
    }

    .textfield {
        width: 100%;
    }
</style>
