<script setup>
    import { computed, ref, nextTick, watch } from "vue";
    import { useVuelidate } from "@vuelidate/core";
    import { required, minLength } from "@vuelidate/validators";
    import draggable from "vuedraggable";
    import testMenu from "@/assets/consts/testMenu";
    import testQuestion from "./TestQuestion.vue";
    const emit = defineEmits(["update:model-value"]);
    const props = defineProps({
        stage: {
            type: Object,
            required: true
        }
    });

    const questions = ref([]);
    const isDragging = ref(false);
    const testComponents = ref([]);
    const listRef = (el) => {
        if (el) testComponents.value.push(el);
    };

    // eslint-disable-next-line no-unused-vars
    const editableStage = computed({
        get() {
            return props.stage;
        },
        set(val) {
            emit("update:model-value", val);
        }
    });

    const draggableQuestions = computed({
        get: () =>
            questions.value.map((item, key) => ({
                ...item,
                key: key
            })),
        set: (val) => {
            questions.value = val.map((item) => item);
        }
    });

    const onQuestionAdd = (question) => {
        questions.value.push({
            type: question.type,
            answers: ["Ответ 1", "Ответ 2"],
            rightAnswers: []
        });
    };

    const onQuestionDelete = (index) => {
        questions.value.splice(index, 1);
    };

    const drag = () => {
        if (isDragging.value) {
            isDragging.value = false;
            nextTick(() => {
                if (testComponents.value)
                    for (let component of testComponents.value) {
                        component.expand();
                    }
            });
        } else {
            isDragging.value = true;
            nextTick(() => {
                if (testComponents.value)
                    for (let component of testComponents.value) {
                        component.minimise();
                    }
            });
        }
    };
    const rules = {
        questions: {
            required,
            minLength: minLength(2)
        }
    };

    const $v = useVuelidate(rules, { questions });

    const showQuestionsError = ref(false);
    const errors = computed(() => $v.value.$errors);
    watch(
        errors,
        (val) => {
            console.log(val);
            console.log(
                []
                    .concat(val)
                    .find((error) => error.$uid == "questions-required")
            );
            if (
                []
                    .concat(val)
                    .find((error) => error.$uid == "questions-required")
            ) {
                showQuestionsError.value = true;
            }
        },
        { deep: true }
    );

    defineExpose({ $v });
</script>

<template>
    <div>
        <v-snackbar v-model="showQuestionsError">
            Укажите вопросы для теста
            <template #actions>
                <v-btn
                    color="indigo"
                    variant="text"
                    @click="showQuestionsError = false">
                    Хорошо
                </v-btn>
            </template>
        </v-snackbar>
        <draggable
            v-model="draggableQuestions"
            handle=".handle"
            ghost-class="ghost"
            item-key="key">
            <template #item="{ index }">
                <test-question
                    :ref="listRef"
                    :key="index + isDragging"
                    v-model="questions[index]"
                    :order="index"
                    :is-dragging="isDragging"
                    class="mb-6"
                    @question-delete="onQuestionDelete(index)"></test-question>
            </template>
        </draggable>

        <div
            v-if="questions.length > 1"
            class="d-flex justify-center">
            <v-btn
                class="handle"
                color="primary"
                variant="text"
                :prepend-icon="
                    isDragging ? 'mdi-content-save-all' : 'mdi-arrow-up-down'
                "
                @click="drag"
                >{{
                    isDragging ? "сохранить порядок" : "поменять порядок"
                }}</v-btn
            >
        </div>
        <g-add
            height="120px"
            :menu-items="testMenu"
            @item-click="onQuestionAdd"></g-add>
    </div>
</template>
