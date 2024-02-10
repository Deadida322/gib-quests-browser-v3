<script setup>
    import { ref } from "vue";
    const focused = ref(false);
</script>

<template>
    <g-gradient
        v-gradient-icon="focused"
        :glow="focused ? 2 : 4"
        :border-radius="focused ? '4px' : 0"
        :border-width="focused ? 0.5 : 0"
        :container-height="40">
        <v-text-field
            density="compact"
            variant="solo"
            placeholder="Поиск"
            append-inner-icon="mdi-magnify"
            @focus="focused = true"
            @blur="focused = false"></v-text-field>
    </g-gradient>
</template>

<style lang="scss" scoped>
    ::v-deep {
        .v-field__input {
            color: rgb(74 20 140);
        }
    }
</style>
