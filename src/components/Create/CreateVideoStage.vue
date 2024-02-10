<script setup>
    import { computed } from "vue";
    const emit = defineEmits(["update:model-value"]);
    const props = defineProps({
        stage: {
            type: Object,
            required: true
        }
    });

    const editableStage = computed({
        get() {
            return props.stage;
        },
        set(val) {
            emit("update:model-value", val);
        }
    });

    const rules = [
        (value) => !!value || "Укажите ссылку",
        (value) =>
            /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-_]*)(&(amp;)?‌[\w?=]*)?/.test(
                value
            ) || "Неверный формат ссылки"
    ];

    const embededUrl = computed(() => {
        let viewCode = "";
        if (!editableStage.value.url) return " https://www.youtube.com/embed/";
        if (editableStage.value.url?.includes("youtube.com")) {
            viewCode = editableStage.value.url.split("=")[1];
        } else {
            let result = editableStage.value.url.split("/");
            viewCode = result[result.length - 1];
        }
        return `https://www.youtube.com/embed/${viewCode}`;
    });
</script>
<template>
    <div>
        <v-text-field
            v-model="editableStage.url"
            color="primary"
            density="comfortable"
            placeholder="Ссылка на видео в youtube"
            label="Ссылка"
            clearable
            :rules="rules"
            prepend-inner-icon="mdi-vhs"
            variant="outlined">
        </v-text-field>
        <g-gradient
            container-height="400px"
            :border-width="2">
            <iframe
                width="100%"
                height="400"
                class="iframe"
                :src="embededUrl"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </g-gradient>
    </div>
</template>

<style lang="scss" scoped>
    .iframe {
        border-radius: 4px;
    }
</style>
