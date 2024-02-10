<script setup>
    import { computed } from "vue";
    const emit = defineEmits("update:modelValue");
    const props = defineProps({
        type: {
            type: String,
            default: "text"
        },
        modelValue: {
            type: Boolean,
            default: false
        }
    });

    const showDialog = computed({
        get() {
            return props.modelValue;
        },
        set(val) {
            emit("update:modelValue", val);
        }
    });
</script>

<template>
    <v-dialog
        v-model="showDialog"
        class="create_stage">
        {{ type }}
    </v-dialog>
</template>
