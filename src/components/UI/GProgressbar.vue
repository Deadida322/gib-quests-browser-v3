<script setup>
    import { computed, ref, onMounted, nextTick } from "vue";
    const props = defineProps({
        height: {
            default: 10,
            required: false,
            type: [Number, String]
        },
        modelValue: {
            default: 0,
            type: [Number, String],
            required: false
        }
    });
    const computedWidth = computed(() => `${String(props.modelValue)}%`);
    const computedContainerWidth = computed(() => `${containerWidth.value}px`);

    const computedHeight = computed(
        () => `${String(props.height).replace("px", "")}px`
    );
    const containerWidth = ref(0);

    const onResize = () =>
        (containerWidth.value = progressRef.value.offsetWidth);

    const progressRef = ref(null);
    onMounted(() => {
        nextTick(() => {
            onResize();
            new ResizeObserver(onResize).observe(progressRef.value);
        });
    });
</script>

<template>
    <div
        ref="progressRef"
        class="g-progress">
        <div class="g-progress__overlay overlay">
            <div class="overlay__line"></div>
        </div>
        <div class="g-progress__underlay"></div>
    </div>
</template>

<style lang="scss" scoped>
    .g-progress {
        width: 100%;
        height: v-bind("computedHeight");
        position: relative;
        border-radius: 4px;
        overflow: hidden;

        &__underlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgb(237 231 246);
            z-index: 1;
        }

        &__overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: v-bind("computedWidth");
            overflow: hidden;
            transition: width 0.2s ease-in-out;
            height: 100%;
            z-index: 2;
        }

        .overlay__line {
            width: v-bind("computedContainerWidth");
            position: absolute;
            height: 100%;
            background: $gradient-main;
        }
    }
</style>
