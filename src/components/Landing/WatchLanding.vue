<script setup>
    import { computed } from "vue";
    const props = defineProps({
        watch: {
            type: Object,
            requred: true,
            default: () => {}
        }
    });

    const progress = computed(() => (props.watch.now / props.watch.all) * 100);
</script>

<template>
    <g-card class="pb-0">
        <v-card-text class="pa-sm-4 pa-3 pa-md-8 d-flex align-center">
            <v-progress-circular
                :rotate="360"
                :size="100"
                :width="15"
                :model-value="progress">
                {{ watch.now }} / {{ watch.all }}
            </v-progress-circular>
            <div class="ml-2">
                <v-card-title>{{ watch.name }}</v-card-title>
                <div class="mt-2 ml-4">
                    Текущий этап:
                    <v-chip
                        color="primary"
                        variant="elevated"
                        class="ml-2"
                        >{{ watch.currentStage }}</v-chip
                    >
                </div>
                <div class="mt-2 ml-4">
                    Следующий этап:
                    <v-chip
                        color="primary"
                        class="ml-2"
                        >{{ watch.nextStage }}</v-chip
                    >
                </div>
            </div>
        </v-card-text>
        <g-progressbar :model-value="progress"></g-progressbar>
    </g-card>
</template>

<style lang="scss" scoped>
    ::v-deep {
        .v-progress-circular__overlay {
            color: rgb(98 0 234);
        }

        .v-progress-circular__underlay {
            color: rgb(209 196 233);
        }
    }
</style>
