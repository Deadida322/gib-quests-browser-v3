<script setup>
    import { ref } from "vue";

    const props = defineProps({
        title: {
            default: "",
            type: String,
            required: true
        },
        isOpened: {
            default: false,
            type: Boolean,
            required: false
        }
    });

    const opened = ref(props.isOpened);
</script>

<template>
    <g-gradient
        :glow="3"
        :border-radius="opened ? '4px' : 0"
        :border-width="opened ? 0.5 : 0">
        <v-expansion-panels
            v-model="opened"
            class="mt-4">
            <v-expansion-panel
                :value="true"
                :title="title">
                <template #text>
                    <slot name="default"></slot>
                </template>
            </v-expansion-panel>
        </v-expansion-panels>
    </g-gradient>
</template>

<style lang="scss" scoped>
    ::v-deep(.v-field) {
        box-shadow: none;
    }

    ::v-deep(.v-expansion-panel__shadow) {
        box-shadow: none;
    }

    ::v-deep(.v-expansion-panel-title--active) {
        background: $gradient-main-transparent;
    }

    ::v-deep(.v-expansion-panel-title) {
        transition: all ease-in-out 0.5s;
    }

    ::v-deep(.v-expansion-panel-title__overlay) {
        opacity: 0 !important;
    }

    @media screen and (width <= 600px) {
        ::v-deep(.v-expansion-panel-text__wrapper) {
            padding: 8px;
        }
    }
</style>
