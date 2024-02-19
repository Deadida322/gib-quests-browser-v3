<script setup>
    import { ref, watch, computed } from "vue";
    import defaultLayout from "@/layouts/defaultLayout.vue";
    import mockQuest from "@/assets/consts/mockQuest";
    import ProcessStage from "@/components/Process/ProcessStage.vue";

    const currentStage = ref(3);

    watch(currentStage, (val) => {
        if (val < 0) {
            currentStage.value = 0;
        }
    });

    const stageCount = computed(() => mockQuest.stages.length);

    const progress = computed(
        () => (currentStage.value / (stageCount.value - 1)) * 100
    );

    const onNextStage = () => {
        currentStage.value += 1;
    };
</script>

<template>
    <default-layout
        md="8"
        page-name="Прохождение">
        <div class="process-page">
            <div class="d-flex justify-space-between align-center">
                <v-btn
                    icon
                    @click="currentStage--">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-chip
                    class="pa-5"
                    color="primary"
                    ><h1 class="text-center text-h6">
                        {{ mockQuest.title }}
                    </h1></v-chip
                >
                <v-btn
                    icon
                    @click="currentStage++">
                    <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </div>
            <div class="d-flex justify-center mt-6">
                <process-stage
                    :stage="mockQuest.stages[currentStage]"
                    @next-stage="onNextStage"></process-stage>
            </div>
            <g-progressbar
                class="progress-bar"
                :model-value="progress"></g-progressbar>
        </div>
    </default-layout>
</template>

<style lang="scss" scoped>
    .progress-bar {
        position: fixed !important;
        bottom: 12px;
        left: 15vw;
        width: 70vw !important;
    }
</style>
