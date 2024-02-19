<script setup>
    import StageIcon from "@/components/Stage/StageIcon.vue";
    import ProcessText from "@/components/Process/ProcessText.vue";
    import ProcessVideo from "@/components/Process/ProcessVideo.vue";
    import ProcessTest from "@/components/Process/ProcessTest/ProcessTest.vue";
    import ProcessMap from "@/components/Process/ProcessMap.vue";
    import ProcessQrCode from "@/components/Process/ProcessQrCode.vue";
    defineProps({
        stage: {
            type: Object,
            required: true,
            default: () => {}
        }
    });

    const emit = defineEmits(["next-stage"]);
</script>

<template>
    <g-card class="process-stage position-relative">
        <stage-icon
            class="process-stage__icon"
            :stage-type="stage.type"></stage-icon>
        <v-card-title class="d-flex align-center"
            ><v-btn
                size="small"
                variant="tonal"
                color="primary"
                class="mr-3 process-stage__index"
                icon>
                {{ stage.order }}
            </v-btn>
            {{ stage.title }}</v-card-title
        >
        <v-card-text class="mt-2">
            <process-text
                v-if="stage.type === 'text'"
                :stage="stage"
                @next-stage="emit('next-stage')"></process-text>
            <process-video
                v-else-if="stage.type === 'video'"
                :stage="stage"
                @next-stage="emit('next-stage')"></process-video>
            <process-test
                v-else-if="stage.type === 'test'"
                :stage="stage"
                @next-stage="emit('next-stage')"></process-test>
            <process-map
                v-else-if="stage.type === 'map'"
                :stage="stage"
                @next-stage="emit('next-stage')"></process-map>
            <process-qr-code
                v-else-if="stage.type === 'qrCode'"
                :stage="stage"
                @next-stage="emit('next-stage')"></process-qr-code>
        </v-card-text>
    </g-card>
</template>

<style lang="scss" scoped>
    ::v-deep(.v-card) {
        overflow: visible;
    }

    .process-stage {
        &__icon {
            position: absolute !important;
            top: 0;
            right: 0;
            transform: translate(20px, -20px) scale(0.8);
            pointer-events: none;
        }

        &__index {
            pointer-events: none;
        }
    }
</style>
