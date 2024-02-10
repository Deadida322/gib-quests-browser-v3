<script setup>
    import defaultPhoto from "@/assets/default.jpg";
    import { toRefs, ref, computed } from "vue";
    import toBase64 from "@/assets/js/toBase64.js";
    const props = defineProps({
        camera: {
            type: Boolean,
            default: false
        },
        maxSize: {
            type: Number,
            default: 10000000
        },
        modelValue: {
            type: [String, File],
            default: ""
        },
        height: {
            type: Number,
            default: 250
        }
    });
    const { maxSize, modelValue } = toRefs(props);

    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

    const drag = ref(false);
    const error = ref("");
    const fileName = ref("");
    const emit = defineEmits(["click", "change", "update:modelValue"]);
    const background = computed({
        set(val) {
            emit("update:modelValue", val);
        },
        get() {
            return modelValue.value || defaultPhoto;
        }
    });

    const filePicker = ({ target }) => {
        try {
            let file = target.files[0];
            fileName.value = "";
            if (allowedTypes.indexOf(file.type) === -1) {
                error.value = "Неверный формат";
            } else if (file.size >= maxSize.value) {
                error.value = "Слишком большой размер";
            } else {
                fileName.value = file.name;
                error.value = "";
                toBase64(file).then((res) => (background.value = res));
            }
        } catch {
            error.value = "Выберите файл";
        }
    };
</script>

<template>
    <div
        class="image_input"
        :class="{ dragover: drag }"
        @click="emit('click')"
        @dragover="drag = true"
        @mouseleave="drag = false"
        @dragleave="drag = false">
        <v-img
            ref="dd"
            rounded
            :cover="false"
            :max-height="height + 'px'"
            class="image_input__img"
            :src="background">
            <div class="image_input__container pa-4">
                <label
                    for="file_input"
                    class="file_input__label">
                    <v-btn
                        v-gradient-icon="{ degrees: -125 }"
                        icon="mdi-upload"
                        size="x-large"
                        variant="flat"
                        color="deep-purple-lighten-4">
                    </v-btn>
                    <div
                        v-if="error"
                        class="mt-5 text-red text-caption">
                        {{ error }}
                    </div>
                    <div
                        v-if="fileName"
                        class="mt-5 text-caption">
                        {{ fileName }}
                    </div>
                </label>
                <input
                    id="file_input"
                    :capture="camera ? 'capture' : 'none'"
                    type="file"
                    class="file_input"
                    accept="image/jpeg,image/png,image/jpg"
                    @change="filePicker" />
            </div>
        </v-img>
    </div>
</template>

<style>
    .image_input__container {
        transition: all 0.3s ease-in-out;
        transform: translateY(-10px);
        opacity: 0.4;
        width: 100% !important;
        height: 110%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .file_input {
            width: 100% !important;
        }
    }

    .image_input {
        border: 1px solid rgb(0 0 0 / 40%);
        overflow: hidden;
        border-radius: 4px;

        * {
            transition: all 0.4s ease-in-out;
        }

        &__img {
            width: 100%;
            position: relative;
        }

        &.dragover,
        &:hover {
            outline: 1px solid rgb(106 110 226);
            border: 1px solid rgb(106 110 226);

            .image_input__img {
                transform: scale(1.1);
            }

            .image_input__container {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .file_input {
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 0;
        }

        .file_input__label {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            color: white;
            flex-direction: column;
            transform: scale(1.1);
            background-color: rgb(31 32 82 / 40%);

            .icon {
                background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23E6E6E685' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='4' stroke-linecap='square'/%3e%3c/svg%3e");
                padding: 1em 2em;
                transform: scale(1.5);
            }
        }
    }
</style>
