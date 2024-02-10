<script setup>
    defineProps({
        update: {
            default: () => {},
            type: Object,
            required: true
        }
    });
</script>

<template>
    <g-card class="pa-1 pa-sm-4 card">
        <v-card-title class="text-deep-purple">{{ update.title }}</v-card-title>
        <v-card-text class="g-card-body d-flex mt-4 align-center">
            <v-btn
                v-gradient-icon
                rounded
                height="80"
                width="80"
                variant="tonal"
                color="primary">
                <v-icon size="40">mdi-{{ update.icon }}</v-icon>
            </v-btn>
            <div class="ml-6 text-blue-grey-lighten-1">
                {{ update.description }}
            </div>
        </v-card-text>
    </g-card>
</template>

<style lang="scss" scoped>
    ::v-deep(.v-card) {
        overflow: visible;
    }
</style>
