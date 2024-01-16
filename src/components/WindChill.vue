<script setup>
import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const windChill = computed(() => {
    return store.clima.windChill
})

</script>

<template >
<div>
    <div class="windChillArea" v-if="windChill < 25">
    <div><b>Feels Like</b></div>
    <div>
        <v-icon  icon="fa-solid fa-temperature-empty" class="windChillIcon" id="windChillIcon"/>
        {{ windChill }}
    </div>
    <div>Wind Chill</div>
    </div>
    </div>
</template>

<style scoped>
.windChillArea {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}
.windChillIcon {
    color: rgb(86, 86, 223)
}
</style>