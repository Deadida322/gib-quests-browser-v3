<script setup>
    import { computed, watch } from "vue";
    import { useVuelidate } from "@vuelidate/core";
    import { required, helpers } from "@vuelidate/validators";
    const emit = defineEmits(["update:model-value"]);

    const props = defineProps({
        modelValue: {
            type: Object,
            required: true
        }
    });

    const editableQuestion = computed({
        get() {
            return props.modelValue;
        },
        set(val) {
            emit("update:model-value", val);
        }
    });

    watch(
        editableQuestion.value.answers,
        (val) => {
            editableQuestion.value.rightAnswers[0] = val[0];
        },
        { deep: true }
    );

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
        }
    };

    const $v = useVuelidate(rules, validatableQuestion);
    defineExpose({ $v });
</script>

<template>
    <div class="d-flex">
        <v-text-field
            v-if="editableQuestion.answers"
            v-model="editableQuestion.answers[0]"
            class="textfield ml-2"
            color="primary"
            density="comfortable"
            placeholder="Ответ"
            label="Ответ на вопрос"
            clearable
            :rules="[(value) => (!value ? 'Укажите верный ответ' : true)]"
            variant="outlined">
        </v-text-field>
    </div>
</template>

<style scoped lang="scss">
    .radio {
        height: 50px;
    }

    .textfield {
        width: 100%;
    }
</style>
