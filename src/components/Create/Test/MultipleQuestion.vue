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
                (item) => val.indexOf(item.index) !== -1
            );
    });

    const validatableQuestion = computed(() => ({
        ...props.modelValue,
        answers: editableQuestion.value.answers.map((title) => ({ title }))
    }));

    const rules = {
        answers: {
            required,
            $each: helpers.forEach({
                title: {
                    required: helpers.withMessage("Укажите ответ", required)
                }
            })
        },
        rightAnswers: {
            required,
            minLength: minLength(2)
        }
    };

    const $v = useVuelidate(rules, validatableQuestion);
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
            :rules="[(value) => (!value ? 'Укажите вопрос' : true)]"
            variant="outlined">
        </v-text-field>

        <v-btn
            size="small"
            icon-color="danger"
            class="mt-1 ml-2"
            variant="flat"
            icon="mdi-minus"
            @click="removeVariant(index)"></v-btn>
    </div>
    <v-divider class="my-4"></v-divider>
    <v-select
        v-model="editableQuestion.rightAnswers"
        class="textfield ml-2"
        color="primary"
        multiple
        :items="[...new Set(editableQuestion.answers)]"
        :error-messages="$v.rightAnswers.$error ? 'Укажите 2 и более' : ''"
        density="comfortable"
        placeholder="Верный ответ"
        label="Верный ответ"
        chips
        clearable
        variant="outlined"></v-select>
</template>

<style scoped lang="scss">
    .textfield {
        width: 100%;
    }
</style>
