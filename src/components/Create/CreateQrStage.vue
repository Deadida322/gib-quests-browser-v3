<script setup>
    import { computed, ref } from "vue";
    import QrcodeVue from "qrcode.vue";
    const qrCodeRef = ref(null);
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
    const download = () => {
        const qr = qrCodeRef.value.$el;
        const link = document.createElement("a");
        link.download = "filename.png";
        link.href = qr.toDataURL();
        link.click();
    };

    const rules = [(value) => !!value || "Укажите кодовое слово"];
</script>
<template>
    <div>
        <v-text-field
            v-model="editableStage.code"
            color="primary"
            density="comfortable"
            placeholder="Укажите кодовое слово"
            label="Кодовое слово"
            clearable
            :rules="rules"
            prepend-inner-icon="mdi-qrcode"
            variant="outlined">
        </v-text-field>
        <div class="d-flex justify-center">
            <div class="position-relative">
                <v-btn
                    color="warning"
                    class="download-button"
                    icon="mdi-download"
                    @click="download">
                </v-btn>
                <g-gradient :border-width="1">
                    <qrcode-vue
                        ref="qrCodeRef"
                        class="qrcode"
                        :value="editableStage.code || 'default'"
                        :size="512"
                        level="H" />
                </g-gradient>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .download-button {
        position: absolute;
        bottom: 12px;
        right: 8px;
        z-index: 2;
    }

    .qrcode {
        border-radius: 4px;
    }
</style>
