<script setup>
    import { useSlots } from "vue";
    const slots = useSlots();
    defineProps({
        menuItems: {
            type: Array,
            required: false
        },
        height: {
            type: String,
            default: "200px"
        },
        icon: {
            type: String,
            default: "plus"
        }
    });
    const emit = defineEmits(["item-click", "icon-click"]);
</script>

<template>
    <div class="add-container">
        <v-menu
            location="end"
            transition="slide-y-transition">
            <template #activator="{ props }">
                <v-btn
                    icon="$vuetify"
                    color="primary"
                    size="x-large"
                    class="add-container__btn"
                    v-bind="props"
                    @click="emit('icon-click')">
                    <v-icon> mdi-{{ icon }} </v-icon>
                </v-btn>
            </template>
            <slot v-if="slots.default"></slot>
            <v-list v-else>
                <v-list-item
                    v-for="(item, index) in menuItems"
                    :key="index"
                    @click="item.onClick || emit('item-click', item)">
                    <template
                        v-if="item.icon"
                        #prepend>
                        <v-icon :icon="'mdi-' + item.icon"></v-icon>
                    </template>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<style lang="scss">
    .add-container {
        width: 100%;
        min-height: v-bind(height);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(97 97 97 / 5%);
        transition: all 0.2s ease-in-out;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23A5A5A5FF' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e");

        &:hover {
            background-color: rgb(97 97 97 / 15%);
            cursor: pointer;

            .add-container__btn {
                transform: scale(1.2);
            }
        }
    }
</style>
