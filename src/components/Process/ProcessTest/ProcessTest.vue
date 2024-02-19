<script setup>
    import { ref, computed, toRefs } from "vue";
    import QuestionIcon from "@/components/Process/ProcessTest/QuestionIcon.vue";
    import ProcessQuestion from "@/components/Process/ProcessTest/ProcessQuestion.vue";
    const props = defineProps({
        stage: {
            type: Object,
            required: true,
            default: () => {}
        }
    });

    const { stage } = toRefs(props);
    const editableStage = ref(stage.value);
    const currentQuestion = ref(0);
    const available = ref(0);
    const emit = defineEmits(["next-stage"]);

    const onNextStage = () => {
        if (isLastQuestion.value) {
            emit("next-stage");
            return;
        }
        currentQuestion.value++;
        available.value++;
    };

    const headers = computed(() =>
        editableStage.value.questions.map((item) => item.type)
    );

    const question = computed({
        get: () => editableStage.value.questions[currentQuestion.value],
        set: (val) =>
            (editableStage.value.questions[currentQuestion.value] = val)
    });

    const isLastQuestion = computed(
        () => editableStage.value.questions.length - 1 === currentQuestion.value
    );
</script>

<template>
    <div class="process-test">
        <!-- eslint-disable-next-line vuetify/no-deprecated-components -->

        <v-card class="pa-4">
            <div class="process-test__header header">
                <template
                    v-for="(type, index) in headers"
                    :key="type">
                    <question-icon
                        :disabled="index > available"
                        :active="currentQuestion >= index"
                        :current="currentQuestion == index"
                        :type="type"
                        @click="currentQuestion = index"></question-icon>
                    <g-progressbar
                        v-if="index < headers.length - 1"
                        :model-value="currentQuestion >= index + 1 ? 100 : 0"
                        height="4"
                        class="header__divider"></g-progressbar>
                </template>
            </div>
            <v-card-title class="text-deep-purple-darken-4 pl-0">
                {{ question.title }}
            </v-card-title>
            <v-card-text class="pl-0">
                <process-question
                    v-model:question="question"></process-question>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    variant="tonal"
                    color="primary"
                    :disabled="
                        !(question.rightAnswers && question.rightAnswers[0])
                    "
                    @click="onNextStage"
                    >{{ isLastQuestion ? "Завершить" : "Следующий" }}</v-btn
                >
            </v-card-actions>
        </v-card>
    </div>
</template>

<style lang="scss" scoped>
    .process-test {
        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .header {
        &__divider {
            flex-grow: 1;
            height: 2px;
            background: rgb(236 224 253);
            transition: all 0.2s ease-in-out;

            &_active {
                background: $gradient-main;
            }
        }
    }
</style>
