<script setup>
    import { ref, useSlots } from "vue";
    defineProps({
        title: {
            type: String,
            required: true
        },
        minimisable: {
            type: Boolean,
            default: true
        },
        deletable: {
            type: Boolean,
            default: true
        },
        minimiseTitle: {
            type: String,
            required: false
        },
        isError: {
            type: Boolean,
            default: false
        },
        glow: {
            type: Number,
            default: 0
        }
    });

    const emit = defineEmits(["delete", "minimise"]);

    const isMinimised = ref(false);

    const toggleMinimise = () => {
        isMinimised.value = !isMinimised.value;
        emit("minimise");
    };

    const minimise = () => (isMinimised.value = true);

    const expand = () => (isMinimised.value = false);

    const onDelete = () => emit("delete");

    const slots = useSlots();

    defineExpose({ minimise, expand });
</script>

<template>
    <div class="window-card">
        <div class="window-card__prepend">
            <slot name="prepend"></slot>
        </div>
        <div class="window-card__actions">
            <v-btn
                v-if="minimisable"
                v-gradient-icon="{ color: 'warning' }"
                class="minimise-btn mr-2"
                color="yellow-lighten-4"
                size="40"
                icon
                @click="toggleMinimise">
                <v-icon size="26"
                    >{{
                        isMinimised
                            ? "mdi-archive-arrow-down-outline"
                            : "mdi-chevron-up"
                    }}
                </v-icon>
            </v-btn>
            <v-btn
                v-if="deletable"
                v-gradient-icon="{ color: 'error' }"
                class="trash-btn"
                color="red-lighten-4"
                size="40"
                density="compact"
                icon
                @click="onDelete">
                <v-icon size="26"> mdi-close </v-icon>
            </v-btn>
        </div>
        <g-gradient
            :glow="glow"
            :animate-glow="true"
            :border-width="1">
            <v-card :class="{ 'window-card_error': isMinimised && isError }">
                <v-card-title :class="{ 'mt-3': !!slots.prepend }">
                    <slot
                        v-if="!isMinimised"
                        name="title"
                        >{{ title || "Заголовок" }}</slot
                    >
                    <slot
                        v-else
                        name="minimiseTitle"
                        >{{ minimiseTitle || title }}</slot
                    >
                </v-card-title>
                <v-expand-transition>
                    <div v-show="!isMinimised">
                        <v-card-text>
                            <slot></slot>
                        </v-card-text>
                        <v-alert
                            v-if="isError"
                            border="bottom"
                            variant="tonal"
                            color="error"
                            title="Неверные данные">
                            Исправьте ошибки
                        </v-alert>
                    </div>
                </v-expand-transition>
            </v-card>
        </g-gradient>
    </div>
</template>

<style lang="scss" scoped>
    .window-card {
        position: relative;

        &__actions {
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(16px, -50%);
            z-index: 2;
        }

        &__prepend {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            transform: translate(-16px, -50%);

            :deep(.v-btn) {
                background-color: rgb(236 224 253);
            }
        }

        &_error {
            border-bottom: 2px solid rgb(var(--v-theme-error));
        }
    }
</style>
