<template >
    <div>
        <v-container>
            <h2>Past Weather</h2>
            <br>
            <h3>Click a button to get past data</h3>
            <br>
            <v-chip v-for="name in btnNames" :value="name.value" @click="useButtonData(name.keyword, name.value)">{{
                name.text
            }}</v-chip>
            <br>
            <br>

            <v-row xs12 sm6 md4>
                
                    
                        <v-menu v-model="isMenuOpen" :close-on-content-click="true">
                            <template v-slot:activator="{ props }">
                                <v-text-field label="Click to select a date" :model-value="formattedDate" readonly
                                    v-bind="props" variant="solo" hide-details></v-text-field>
                            </template>
                            <v-date-picker v-model="selectedDate" hide-actions title="Click to select a date"
                                :color="color">
                                <template v-slot:header></template>
                            </v-date-picker>
                        </v-menu>
                    
                
            </v-row>
            <br>
            <br>
            <div>
                <strong>Weather: {{ weatherDate }} </strong>
            </div>
            <v-row v-for="param, val in dayWeather" :key="val">
                <v-col cols="6"> {{ val }}</v-col> <v-col cols="4">{{ param }}</v-col>
            </v-row>
        </v-container>

    </div>
</template>
<script setup>

import { useRecordStore } from '@/store/record';
import { ref, watch, reactive, computed } from 'vue';
import { useDate } from 'vuetify/lib/framework.mjs';


const store = useRecordStore()
var menu = true
function useMenu() {
    return menu = !menu
}
// var menu1 = ref(true)
// var menu3 = ref(true)
var useWeatherDate = useDate();
var weatherDate
const { label, color, modelValue } = defineProps([
    "label",
    "color",
    "modelValue",
]);
// const emit = defineEmits("update:modelValue");

const isMenuOpen = ref(false);
var selectedDate = ref(modelValue);

const formattedDate = computed(() => {
    return selectedDate.value ? selectedDate.value.toLocaleDateString("en") : "";
});

function useButtonData(keyword, offset) {
    const tokenDate = new Date()
    tokenDate.setDate(tokenDate.getDate() - offset)
    weatherDate = formattedDate(tokenDate)
    console.log("weatherDate3 =" + weatherDate)
    getPastData(keyword, offset)
}

// watch(modelValue, (newDate) => {
//   selectedDate.value = newDate;
// });

// watch(selectedDate, (newDate) => {
//   emit("update:modelValue", newDate);
// });

watch(selectedDate, () => {
    isMenuOpen.value = false;
});

// function formatDate(focusDate) {
//     return useWeatherDate.format(focusDate, "fullDateWithWeekday")
// }

var dayWeather = computed(() => {
    return store.getRecord
})

const btnNames = ref([
    { text: "Today", keyword: "day", value: 0 },
    { text: "Yesterday", keyword: "day", value: 1 },
    { text: "Ereyesterday", keyword: "day", value: 2 },
    { text: "Three days ago", keyword: "day", value: 3 },
])



function getDaysOffset(selectedDate) {
    const MILLS_PER_DAY = 1000 * 60 * 60 * 24;
    const today = getUTCDate(new Date(Date.now()));
    const pastDate = getUTCDate(selectedDate);
    return Math.floor((today - pastDate) / MILLS_PER_DAY);
}

function getUTCDate(validDate) {
    return Date.UTC(validDate.getFullYear(), validDate.getMonth(), validDate.getDate())
}


function getPastData(keyword, offset) {
    store.fetchRecord(keyword, offset)
}

</script>
<style ></style>