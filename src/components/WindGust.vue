<script setup>

import { computed } from 'vue'
import { useClimaStore } from '../store/clima';


const store = useClimaStore();


var tenMinuteWindGust = computed(() => {
    return store.clima.tenMinuteWindGust
})
var colorGust = computed(() => {
    let gust=store.clima.tenMinuteWindGust;
    let gustColor = "black";
    if (gust >= 15) {gustColor = "yellow"};
    if (gust >= 25 ) {gustColor = "red"};
    return gustColor;

})


</script>


<template >
    <div class="tenMinuteWindGustArea">
        <div>
        <v-icon icon="fas fa-wind" class="tenMinuteWindGustIcon" id="tenMinuteWindGustIcon" />
       {{ tenMinuteWindGust }}
    </div>
     10 Min. Gust 
    </div>
</template>

<style>
#tenMinuteWindGustIcon {
    color:v-bind("colorGust")
}

.tenMinuteWindGustArea{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}
</style>