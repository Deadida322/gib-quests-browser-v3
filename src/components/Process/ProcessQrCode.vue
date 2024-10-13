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

    const { stage } = toRefs(props);
    const editableStage = ref(stage.value);
    const disabled = ref(true);
    const emit = defineEmits(["next-stage"]);

    qr.callback = (err, value) => {
        if (err) {
            console.error(err);
        }
        if (value.result === stage.value.code) disabled.value = false;
        else disabled.value = true;
    };

    const readQrCode = (value) => {
        qr.decode(value);
    };
</script>

<template>
    <div>
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
