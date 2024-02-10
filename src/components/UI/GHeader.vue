<script setup>
    import { toRef, computed } from "vue";
    import GLkMenu from "@/components/UI/GLkMenu.vue";
    const emit = defineEmits(["update:drawer"]);
    const props = defineProps({
        drawer: {
            type: Boolean,
            default: false
        },
        pageName: {
            type: String,
            default: "Главная"
        }
    });
    const { drawer } = toRef(props);
    const drawerValue = computed({
        get() {
            return drawer?.value;
        },
        set(val) {
            emit("update:drawer", val);
        }
    });
</script>

<template>
    <v-app-bar color="primary">
        <v-app-bar-nav-icon
            @mouseover="drawerValue = !drawerValue"></v-app-bar-nav-icon>
        <v-app-bar-title>{{ pageName }}</v-app-bar-title>
        <v-spacer></v-spacer>
        <g-lk-menu></g-lk-menu>
    </v-app-bar>
</template>
