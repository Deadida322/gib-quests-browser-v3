<script setup>
    import { toRefs, computed } from "vue";
    import editor from "@/assets/cke/build/ckeditor.js";
    const emit = defineEmits(["update:modelValue"]);
    const props = defineProps({
        title: {
            type: String,
            default: "Редактировать"
        },
        modelValue: {
            type: String,
            required: true
        },
        errors: {
            type: [Array, String],
            required: false
        }
    });
    const { modelValue } = toRefs(props);

    const value = computed({
        set(val) {
            emit("update:modelValue", val);
        },
        get() {
            return modelValue.value;
        }
    });
</script>

<template>
    <g-gradient>
        <v-card class="pb-2">
            <v-card-title>
                {{ title }}
            </v-card-title>
            <v-card-text
                :class="{ 'red-border': errors?.length }"
                class="mt-2 pb-0">
                <ckeditor
                    v-bind="$attrs"
                    v-model="value"
                    :editor="editor"></ckeditor>
            </v-card-text>
            <v-card-subtitle
                v-if="errors?.length"
                class="mb-2 errors mt-1">
                {{ errors.join("<br />") }}
            </v-card-subtitle>
        </v-card>
    </g-gradient>
</template>

<style lang="scss" scoped>
    :deep(.ck-editor__editable) {
        border-radius: 4px !important;
        min-height: 150px;

        * {
            transition: all ease-in 0.2s;
        }
    }

    :deep(.ck.ck-editor__editable_inline) {
        border: 1px solid rgb(0 0 0 / 40%);

        --ck-focus-ring: 2px solid rgb(106 110 226);
    }

    :global(.ck-powered-by) {
        display: none;
    }

    .red-border {
        &:deep(.ck.ck-editor__editable_inline) {
            border-color: rgb(var(--v-theme-error)) !important;
        }
    }

    .errors {
        color: rgb(var(--v-theme-error));
    }
</style>
