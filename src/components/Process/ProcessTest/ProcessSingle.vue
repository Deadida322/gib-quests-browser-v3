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

    const editableAnswers = ref();

    watch(editableAnswers, (val) => {
        editableQuestion.value.rightAnswers = [val];
    });
</script>

<template>
    <div>
        <v-radio-group v-model="editableAnswers">
            <v-radio
                v-for="answer in editableQuestion.answers"
                :key="answer"
                color="primary"
                :label="answer"
                :value="answer"></v-radio>
        </v-radio-group>
    </div>
</template>
