<script setup>
    import { computed } from "vue";
    const props = defineProps({
        stage: {
            type: Object,
            required: true,
            default: () => {}
        }
    });
    const emit = defineEmits(["next-stage"]);

    const computedSrc = computed(() => {
        let viewCode = "";
        if (props.stage.url.includes("youtube.com")) {
            viewCode = props.stage.url.split("=")[1];
        } else {
            let result = props.stage.url.split("/");

            viewCode = result[result.length - 1];
        }
        return `https://www.youtube.com/embed/${viewCode}`;
    });
</script>

<template>
    <iframe
        ref="iframeRef"
        class="process-video"
        width="100%"
        height="500"
        :src="computedSrc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="d-flex mt-2">
        <v-spacer></v-spacer>
        <v-btn
            variant="tonal"
            color="primary"
            @click="emit('next-stage')"
            >Далее</v-btn
        >
    </div>
</template>

<style lang="scss">
    .process-video {
        border-radius: 4px;
        overflow: hidden;
    }
</style>
