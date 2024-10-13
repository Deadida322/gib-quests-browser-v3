<script setup>
    import { toRefs, computed, ref } from "vue";
    import draggable from "vuedraggable";

    const props = defineProps({
        question: {
            type: Object,
            required: true,
            default: () => {}
        }
    });
    const { question } = toRefs(props);

    const editableQuestion = computed({
        set: (val) => {
            emit("update:question", val);
        },
        get: () => question.value
    });

    const emit = defineEmits(["update:question"]);

    const answersToDrag = ref(editableQuestion.value.answers);

    const draggableAnswers = computed({
        get: () =>
            answersToDrag.value.map((item) => ({
                item: item
            })),
        set: (val) => {
            answersToDrag.value = editableQuestion.value.answ = val.map(
                (item) => item.item
            );
            if (
                val.map((item) => item.item).join("") ===
                editableQuestion.value.rightAnswers.join("")
            ) {
                return (editableQuestion.value.right = true);
            }
            return (editableQuestion.value.right = false);
        }
    });
</script>

<template>
    <div>
        <draggable
            v-model="draggableAnswers"
            handle=".handle"
            ghost-class="ghost"
            item-key="item">
            <template #item="{ index }">
                <div
                    :key="draggableAnswers[index]"
                    class="handle">
                    <g-card
                        :border-width="0"
                        :animate-glow="false"
                        class="pa-4 mt-4 text-blue-grey-lighten-1">
                        {{ answersToDrag[index] }}
                    </g-card>
                </div>
            </template>
        </draggable>
    </div>
</template>

<style lang="scss" scoped>
    ::v-deep(.v-input__details) {
        display: none;
    }
</style>
