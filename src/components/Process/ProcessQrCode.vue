<script setup>
    import { ref, toRefs } from "vue";
    import QrCode from "qrcode-reader";
    var qr = new QrCode();
    const props = defineProps({
        stage: {
            type: Object,
            required: true,
            default: () => {}
        }
    });

    const message = ref("");

    const snackbar = ref(false);

    const { stage } = toRefs(props);
    const editableStage = ref(stage.value);
    const disabled = ref(true);
    const emit = defineEmits(["next-stage"]);

    qr.callback = (err, value) => {
        if (err || !value) {
            console.error(err);
            snackbar.value = true;
            return (message.value = "Не удалось отсканировать код");
        }
        if (value.result === stage.value.code) {
            disabled.value = false;
            message.value = `Верный код - ${value.result}!`;
        } else {
            disabled.value = true;
            message.value = `Некорректный код - ${value.result}`;
        }

        snackbar.value = true;
    };

    const readQrCode = (value) => {
        qr.decode(value);
    };
</script>

<template>
    <div>
        <v-snackbar
            v-model="snackbar"
            :timeout="3000">
            {{ message }}

            <template #actions>
                <v-btn
                    color="blue"
                    variant="text"
                    @click="snackbar = false">
                    ок
                </v-btn>
            </template>
        </v-snackbar>
        <g-image-loader
            v-model="editableStage.image"
            @update:model-value="readQrCode"></g-image-loader>
        <div class="d-flex mt-4">
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                variant="tonal"
                :disabled="disabled"
                @click="emit('next-stage')"
                >Далее</v-btn
            >
        </div>
    </div>
</template>
