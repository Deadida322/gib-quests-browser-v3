<script setup>
    import GEditor from "@/components/UI/GEditor.vue";
    import { useVuelidate } from "@vuelidate/core";
    import { required, minLength, helpers } from "@vuelidate/validators";

    import { computed } from "vue";
    const emit = defineEmits(["update:model-value"]);
    const props = defineProps({
        stage: {
            type: Object,
            required: true
        }
    });

    const editableStage = computed({
        get() {
            return props.stage;
        },
        set(val) {
            emit("update:model-value", val);
        }
    });

    const rules = {
        text: {
            required: helpers.withMessage("Поле обязательно", required),
            minLength: helpers.withMessage(
                "Укажите хотя бы 2 символа",
                minLength(2)
            )
        }
    };

    const $v = useVuelidate(rules, editableStage);

    const validate = () => $v.value.$validate();

    const textErrors = computed(() => {
        if (!$v.value.$errors?.length) return "";

        return $v.value.$errors.map((error) => error.$message);
    });

    defineExpose({ $v, validate });
</script>
<template>
    <g-editor
        v-model="editableStage.text"
        :errors="textErrors"
        title="Подробнее"></g-editor>
</template>
