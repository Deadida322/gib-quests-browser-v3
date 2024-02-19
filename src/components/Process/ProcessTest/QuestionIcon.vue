<script setup>
    import testTypes from "@/assets/consts/testTypes.js";
    defineProps({
        type: {
            type: String,
            required: true,
            default: ""
        },
        active: {
            type: Boolean,
            required: false,
            default: false
        },
        current: {
            type: Boolean,
            required: false,
            default: false
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    });
</script>

<template>
    <g-gradient
        :container-width="36"
        :container-height="36"
        :border-width="active ? 1 : 0"
        class="question-icon"
        :class="{
            'question-icon_current': current,
            'question-icon_disabled': disabled
        }"
        border-radius="50%">
        <v-btn
            v-gradient-icon
            class="handle"
            variant="tonal"
            color="primary"
            density="comfortable"
            :icon="'mdi-' + testTypes[type].icon"></v-btn>
    </g-gradient>
</template>

<style lang="scss" scoped>
    ::v-deep(.v-btn) {
        background-color: rgb(255 255 255);
    }

    .question-icon {
        &_current {
            ::v-deep(.v-btn) {
                background-color: rgb(255 255 255 / 70%);
            }
        }

        &_disabled {
            opacity: 0.5;
            pointer-events: none;
        }
    }
</style>
