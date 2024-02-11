<template>
    <div
        :key="key"
        class="gradient-wrapper"
        :class="{
            'gradient-wrapper__glow': !!glow,
            'gradient-wrapper__animate': !!animateGlow
        }">
        <div
            ref="bodyRef"
            class="gradient-body">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
    import { toRefs, computed, onMounted, nextTick, ref } from "vue";
    const props = defineProps({
        borderRadius: {
            type: String,
            default: "5px",
            required: false
        },
        borderWidth: {
            type: [Number, String],
            default: 1,
            required: false
        },
        containerHeight: {
            type: Number,
            default: null,
            required: false
        },
        containerWidth: {
            type: Number,
            default: null,
            required: false
        },
        glow: {
            type: Number,
            default: null,
            required: false
        },
        animateGlow: {
            type: Boolean,
            default: false
        }
    });
    const bodyRef = ref(null);
    const key = ref(Math.random());
    const defaultContainerHeight = ref(null);
    const defaultContainerWidth = ref(null);
    const {
        borderRadius,
        borderWidth,
        containerHeight,
        animateGlow,
        containerWidth
    } = toRefs(props);

    onMounted(() => {
        const resize = () => {
            if (containerHeight.value || containerWidth.value) {
                if (containerHeight.value) {
                    defaultContainerHeight.value = `${containerHeight.value}px`;
                }
                if (containerWidth.value) {
                    defaultContainerWidth.value = `${containerWidth.value}px`;
                }
                return;
            }
            if (bodyRef.value) {
                defaultContainerHeight.value =
                    containerHeight.value ||
                    `${Math.ceil(bodyRef.value?.offsetHeight)}px`;
                defaultContainerWidth.value = `${Math.ceil(
                    bodyRef.value?.offsetWidth
                )}px`;
            }
        };
        nextTick(() => {
            window.addEventListener(
                "resize",
                () => {
                    if (containerWidth.value)
                        defaultContainerWidth.value = "fit-content";
                    else defaultContainerWidth.value = "100%";
                    if (!containerHeight.value)
                        defaultContainerHeight.value = "fit-content";
                    // else defaultContainerHeight.value = "100%";
                },
                true
            );

            new ResizeObserver(() => resize()).observe(bodyRef.value);
            resize();
        });
    });

    const computedTransform = computed(() => `-${borderWidth.value}px`);
    const disableBorder = computed(() =>
        borderWidth.value ? "block" : "none"
    );
    const computedWidth = computed(
        () => `calc(100% + ${borderWidth.value * 2}px)`
    );
    const computedHeight = computed(
        () => `calc(100% + ${borderWidth.value * 2}px)`
    );
</script>

<style lang="scss" scoped>
    .gradient-wrapper {
        position: relative;
        height: v-bind("defaultContainerHeight");
        width: v-bind("defaultContainerWidth");

        :deep(> *) {
            z-index: 1;
            position: relative;
        }

        &::before,
        &::after {
            border-radius: v-bind("borderRadius");
            position: absolute;
            content: "";
            display: v-bind("disableBorder");
            top: 0;
            left: 0;
            transform: translate(
                v-bind("computedTransform"),
                v-bind("computedTransform")
            );
            background: $gradient-main;
            width: v-bind("computedWidth");
            height: v-bind("computedHeight");
        }

        &__glow::after {
            display: block;
            zoom: v-bind("glow");
            filter: blur(1px);
            opacity: 0.4;
        }

        &__animate::after {
            animation: 1s ease-in-out 0s infinite alternate glow;
        }
    }

    @keyframes glow {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 0.4;
        }
    }
</style>
