<script setup>
    import { ref, toRefs, computed, watch } from "vue";
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

    const emit = defineEmits(["update:question"]);

    const editableAnswers = ref([]);

    watch(editableAnswers, (val) => {
        editableQuestion.value.answ = val;
        if (
            val.sort((a, b) => a.localeCompare(b)).join("") ===
            editableQuestion.value.rightAnswers
                .sort((a, b) => a.localeCompare(b))
                .join("")
        ) {
            return (editableQuestion.value.right = true);
        }
        editableQuestion.value.right = false;
    });
</script>

<template>
    <div>
        <v-checkbox
            v-for="answer in editableQuestion.answers"
            :key="answer"
            v-model="editableAnswers"
            color="primary"
            :label="answer"
            :value="answer"></v-checkbox>
    </div>
</template>

<style lang="scss" scoped>
    ::v-deep(.v-input__details) {
        display: none;
    }
</style>
