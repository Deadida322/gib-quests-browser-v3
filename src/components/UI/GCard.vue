<script setup inherit-attrs="false">
    import { ref, useAttrs } from "vue";
    const hovered = ref(false);
    const attrs = useAttrs();
    defineProps({
        width: {
            default: "100%",
            required: false,
            type: String
        }
    });
</script>

<template>
    <g-gradient
        :glow="2"
        :style="{
            width: width
        }"
        :animate-glow="hovered"
        :border-width="0.5"
        @mouseover="hovered = true"
        @mouseleave="hovered = false">
        <v-card
            v-bind="attrs"
            elevation="0">
            <slot></slot>
        </v-card>
    </g-gradient>
</template>
