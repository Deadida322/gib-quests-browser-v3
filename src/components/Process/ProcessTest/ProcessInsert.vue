<script setup>
    import { ref, toRefs, watch, computed } from "vue";
    const props = defineProps({
        question: {
            type: Object,
            required: true,
            default: () => {}
        }
    });

    const { question } = toRefs(props);
    const editableQuestion = computed({
        set: (val) => emit("update:question", val),
        get: () => question.value
    });

    const emit = defineEmits(["answer", "update:question"]);

    const editableAnswers = ref("");

    watch(editableAnswers, (val) => {
        editableQuestion.value.rightAnswers[0] = val;
        console.log(editableQuestion.value.rightAnswers);
    });
</script>

<template>
    <div>
        <v-text-field
            v-model="editableAnswers"
            color="primary"
            density="comfortable"
            placeholder="Укажите ответ"
            label="Ваш ответ"
            variant="outlined"></v-text-field>
    </div>
</template>

<style lang="scss" scoped>
    ::v-deep(.v-input__details) {
        display: none;
    }
</style>
