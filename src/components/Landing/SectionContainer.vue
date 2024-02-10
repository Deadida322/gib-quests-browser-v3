<template>
    <v-row
        class="section"
        :class="{
            section_tonal: tonal
        }">
        <v-col
            cols="0"
            class="d-none d-sm-block"
            sm="1"
            md="2"></v-col>
        <v-col
            cols="12"
            md="8"
            sm="10"
            class="pa-6 pa-md-0">
            <slot></slot>
        </v-col>
        <v-col
            cols="0"
            class="d-none d-sm-block"
            sm="1"
            md="2"></v-col>
    </v-row>
</template>

<script setup>
    defineProps({
        tonal: {
            required: false,
            default: false,
            type: Boolean
        }
    });
</script>

<style lang="scss">
    .section_tonal {
        background-color: rgb(249 244 255);
    }
</style>
