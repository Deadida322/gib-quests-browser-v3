<script setup>
    import { ref, toRefs } from "vue";
    import { QrcodeStream } from "vue-qrcode-reader";

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
    const disabled = ref(true);
    const emit = defineEmits(["next-stage"]);

    const onDetect = (codes) => {
        if (!codes?.length) {
            snackbar.value = true;
            return (message.value = "Не удалось отсканировать код");
        }
        const { rawValue: value } = codes[0];
        if (value === stage.value.code) {
            disabled.value = false;
            message.value = `Верный код - ${value}!`;
        } else {
            disabled.value = true;
            message.value = `Некорректный код - ${value}`;
        }

        snackbar.value = true;
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
        <qrcode-stream
            class="qr-stream"
            @detect="onDetect"></qrcode-stream>
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

<style lang="scss" scoped>
    .qr-stream {
        width: 100%;
        height: 600px;
    }
</style>
