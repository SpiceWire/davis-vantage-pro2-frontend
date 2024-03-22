<template >
    <div>
        <v-container>
        <v-row>
            <v-col cols="3">
                {{ forecastName }}
            </v-col>

        </v-row>
        </v-container>    
    </div>
</template>
<script setup>
import { onUnmounted, onMounted, computed, ref } from 'vue'

const props = defineProps(['forecastItem'])
console.log("props are: ", props)
console.log("propname is: ", props.name)
var forecastName =computed(()=>
    props?.forecastItem?.name
)
</script>
<style >
    
</style>