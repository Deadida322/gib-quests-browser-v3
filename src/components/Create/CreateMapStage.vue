<script setup>
    import { useVuelidate } from "@vuelidate/core";
    // eslint-disable-next-line no-unused-vars
    import L from "leaflet";
    import { required, minLength, helpers } from "@vuelidate/validators";
    import icon from "@/assets/icons/map-marker.png";
    import iconOutline from "@/assets/icons/map-marker-outline.png";

    import "leaflet/dist/leaflet.css";
    import {
        LMap,
        LTileLayer,
        LMarker,
        LIcon,
        LPopup
    } from "@vue-leaflet/vue-leaflet";

    import { computed, ref } from "vue";

    const mapRef = ref(null);
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

    const myPosition = ref({});
    const selectedPostion = ref({});

    navigator.geolocation.watchPosition((position) => {
        console.log(position);
        myPosition.value.latitude = position.coords.latitude;
        myPosition.value.longitude = position.coords.longitude;
    });

    const lMyPosition = computed(() => [
        myPosition.value.latitude,
        myPosition.value.longitude
    ]);

    const lSelectedPosition = computed(() => [
        selectedPostion.value.latitude,
        selectedPostion.value.longitude
    ]);

    const zoomToSelected = () => {
        mapRef.value.leafletObject.setView(lSelectedPosition.value, 15, {
            animation: true
        });
    };

    const mapClick = (e) => {
        if (!e.latlng) return;
        console.log(e);
        selectedPostion.value.latitude = e.latlng.lat;
        selectedPostion.value.longitude = e.latlng.lng;
        zoomToSelected();
    };

    const zoomToMe = () => {
        mapRef.value.leafletObject.setView(lMyPosition.value, 15, {
            animation: true
        });
    };

    defineExpose({ $v, validate });
</script>
<template>
    <g-gradient
        border-width="2"
        class="">
        <div class="map-stage-container">
            <l-map
                v-if="lMyPosition[0]"
                ref="mapRef"
                :min-zoom="5"
                :max-zoom="20"
                :zoom="14"
                :center="lMyPosition"
                @click="mapClick">
                <l-marker
                    v-if="lMyPosition[0]"
                    :lat-lng="lMyPosition">
                    <l-popup width="100"> Ваше местоположение </l-popup>
                    <l-icon
                        :icon-anchor="[0, 0]"
                        :icon-size="[48, 48]"
                        :icon-url="icon"
                        class-name="icon-class">
                    </l-icon>
                    ></l-marker
                >
                <l-marker
                    v-if="lSelectedPosition[0]"
                    :lat-lng="lSelectedPosition">
                    <l-popup width="100"> Отмеченная точка </l-popup>
                    <l-icon
                        :icon-anchor="[0, 0]"
                        :icon-size="[48, 48]"
                        :icon-url="iconOutline"
                        class-name="icon-class">
                    </l-icon>
                    ></l-marker
                >
                <l-tile-layer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    layer-type="base"
                    name="OpenStreetMap"></l-tile-layer>
            </l-map>
        </div>
    </g-gradient>
    <div class="mt-5">
        <v-btn
            variant="text"
            @click="zoomToMe">
            <template #prepend>
                <img
                    :width="18"
                    :src="icon"
                    alt="" />
            </template>
            Где я
        </v-btn>
        <v-btn
            variant="text"
            @click="zoomToSelected">
            <template #prepend>
                <img
                    :width="18"
                    :src="iconOutline"
                    alt="" />
            </template>
            Отмечено
        </v-btn>
    </div>
</template>

<style lang="scss">
    .map-stage-container {
        height: 400px;
        border-radius: 4px;
        overflow: hidden;
    }

    .icon-class {
        padding: 10px;
        width: auto 40px;
        height: auto 40px;
        margin: 0 auto;
        margin-top: -48px !important;
        margin-left: -24px !important;
    }

    .leaflet-popup-content-wrapper {
        box-shadow: none;

        &::after {
            background: $gradient-main;
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            border-radius: 10px;
            filter: blur(5px);
            z-index: -1;
        }
    }
</style>
