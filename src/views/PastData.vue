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
            <v-row>
                <v-col cols="12" sm="6" md="4">
                    <v-menu 
                    
                    :close-on-content-click="false" 
                    :return-value.sync="weatherDate"
                    transition="scale-transition" 
                    offset-y 
                    min-width="auto"
                    >
                        <template v-slot:activator="{ props }" >
                            <v-text-field 
                                v-bind:="props"
                                v-model="weatherDate" 
                                label="Click to select a date"
                                prepend-icon="fa-regular fa-calendar" 
                                readonly 
                                ></v-text-field>
                        </template>
                        
                    </v-menu>
                </v-col>
            </v-row>
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
import { ref, reactive, computed } from 'vue';
import { useDate } from 'vuetify/lib/framework.mjs';

const store = useRecordStore()

var menu1 = ref(true)

var useWeatherDate = useDate();
var weatherDate = useWeatherDate.format(new Date(), "fullDateWithWeekday")

function formatDate(focusDate) {
    return useWeatherDate.format(focusDate, "fullDateWithWeekday")
}

var dayWeather = computed(() => {
    return store.getRecord
})

const btnNames = ref([
    { text: "Today", keyword: "day", value: 0 },
    { text: "Yesterday", keyword: "day", value: 1 },
    { text: "Ereyesterday", keyword: "day", value: 2 },
    { text: "Three days ago", keyword: "day", value: 3 },
])


function useButtonData(keyword, offset) {
    const tokenDate = new Date()
    tokenDate.setDate(tokenDate.getDate() - offset)
    weatherDate = formatDate(tokenDate)
    console.log("weatherDate3 =" + weatherDate)
    getPastData(keyword, offset)
}

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