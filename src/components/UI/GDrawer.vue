<!-- eslint-disable vue/no-template-shadow -->
<script setup>
    import menuItems from "@/assets/js/menu.js";
    import { toRefs, computed, ref } from "vue";
    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        }
    });
    const opened = ref([]);

    import logo from "@/assets/logos.svg?component";

    const emit = defineEmits(["update:modelValue"]);

    const { modelValue } = toRefs(props);
    const show = computed({
        get() {
            return modelValue.value;
        },
        set(val) {
            emit("update:modelValue", val);
        }
    });
</script>

<template>
    <v-navigation-drawer
        v-model="show"
        width="400px"
        absolute
        temporary
        :elevation="0"
        :border="0"
        class="pa-4"
        @mouseleave="show = false">
        <div class="d-flex flex-column justify-space-around align-center">
            <div class="text-caption mb-4">powered by</div>
            <logo width="40%" />
        </div>
        <v-list
            v-model:opened="opened"
            class="mt-4"
            open-strategy="multiple">
            <template
                v-for="item in menuItems"
                :key="item.to">
                <v-list-item
                    v-if="!item.subList"
                    color="primary"
                    :value="item.name"
                    :title="item.name"
                    :to="item.route">
                    <template #prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>
                </v-list-item>
                <v-list-group
                    v-else
                    :value="item.icon"
                    :prepend-icon="item.icon">
                    <template #activator="slot">
                        <v-list-item
                            v-bind="slot.props"
                            :title="item.name">
                            <template #prepend>
                                <v-icon :icon="item.icon"></v-icon>
                            </template>
                        </v-list-item>
                    </template>
                    <v-list-item
                        v-for="subItem in item.subList"
                        :key="subItem.route"
                        density="compact"
                        color="primary"
                        :title="subItem.name"
                        :to="subItem.route">
                        <template #prepend>
                            <v-icon :icon="subItem.icon"></v-icon>
                        </template>
                    </v-list-item>
                </v-list-group>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>
