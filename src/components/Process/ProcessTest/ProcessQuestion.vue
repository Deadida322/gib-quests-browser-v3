<!-- eslint-disable no-unused-vars -->
<script setup>
    import ProcessSingle from "@/components/Process/ProcessTest/ProcessSingle.vue";
    import ProcessMultiple from "@/components/Process/ProcessTest/ProcessMultiple.vue";
    import ProcessInsert from "@/components/Process/ProcessTest/ProcessInsert.vue";
    import ProcessOrder from "@/components/Process/ProcessTest/ProcessOrder.vue";
    import { computed, toRefs } from "vue";
    const props = defineProps({
        question: {
            type: Object,
            required: true,
            default: () => {}
        }
    });

    const { question } = toRefs(props);
    const components = {
        single: ProcessSingle,
        multiple: ProcessMultiple,
        order: ProcessOrder,
        insert: ProcessInsert
    };

    const emit = defineEmits(["update:question"]);

    const editableQuestion = computed({
        set: (val) => emit("update:question", val),
        get: () => question.value
    });
</script>

<template>
    <div class="mt-2">
        <component
            :is="components[question.type]"
            v-model:question="editableQuestion"></component>
    </div>
</template>
