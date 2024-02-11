<script setup>
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
    <div class="process-text">
        <div
            class="text-blue-grey-lighten-1"
            v-html="stage.text"></div>
        <div class="d-flex">
            <v-spacer />
            <v-btn
                color="primary"
                variant="tonal"
                @click="emit('next-stage')"
                >Далее</v-btn
            >
        </div>
    </div>
</template>
