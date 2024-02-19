<script setup>
    import { ref, computed, toRefs, onUnmounted } from "vue";
    // eslint-disable-next-line no-unused-vars
    import L from "leaflet";
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

    const mapRef = ref(null);
    const props = defineProps({
        stage: {
            type: Object,
            required: true,
            default: () => {}
        }
    });

    const { stage } = toRefs(props);
    const editableStage = ref(stage.value);
    const goalPosition = ref(editableStage.value.point);
    const lMyPosition = computed(() => [
        myPosition.value.latitude,
        myPosition.value.longitude
    ]);
    const emit = defineEmits(["next-stage"]);
    const lGoalPosition = computed(() => [
        goalPosition.value.latitude,
        goalPosition.value.longitude
    ]);

    const myPosition = ref({});
    const zoomToGoal = () => {
        mapRef.value.leafletObject.setView(lGoalPosition.value, 15, {
            animation: true
        });
    };
    const zoomToMe = () => {
        mapRef.value.leafletObject.setView(lMyPosition.value, 15, {
            animation: true
        });
    };

    const watchId = navigator.geolocation.watchPosition((position) => {
        console.log(position);
        myPosition.value.latitude = position.coords.latitude;
        myPosition.value.longitude = position.coords.longitude;
    });

    onUnmounted(() => navigator.geolocation.clearWatch(watchId));
</script>

<template>
    <div style="height: 400px">
        <l-map
            v-if="lMyPosition[0]"
            ref="mapRef"
            :min-zoom="5"
            :max-zoom="20"
            :zoom="14"
            :center="lMyPosition">
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
                v-if="lGoalPosition[0]"
                :lat-lng="lGoalPosition">
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
    <div class="mt-5 d-flex">
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
            @click="zoomToGoal">
            <template #prepend>
                <img
                    :width="18"
                    :src="iconOutline"
                    alt="" />
            </template>
            Цель
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
            variant="tonal"
            color="primary"
            @click="emit('next-stage')"
            >Далее</v-btn
        >
    </div>
</template>
