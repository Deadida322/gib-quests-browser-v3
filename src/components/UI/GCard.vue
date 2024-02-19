<script setup inherit-attrs="false">
    import { ref, useAttrs } from "vue";
    const hovered = ref(false);
    const attrs = useAttrs();
    defineProps({
        width: {
            default: "100%",
            required: false,
            type: String
        },
        borderWidth: {
            default: 0.5,
            required: false,
            type: Number
        },
        animateGlow: {
            default: true,
            required: false,
            type: Boolean
        }
    });
</script>

<template>
    <g-gradient
        :glow="2"
        :style="{
            width: width
        }"
        :animate-glow="hovered && animateGlow"
        :border-width="borderWidth"
        @mouseover="hovered = true"
        @mouseleave="hovered = false">
        <v-card
            v-bind="attrs"
            elevation="0">
            <slot></slot>
        </v-card>
    </g-gradient>
</template>
