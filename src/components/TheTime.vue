<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const theTime = ref(new Date());
const theDate = ref(new Date());
const theUpdatedTime = () => {
    theTime.value = new Date().toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
    });
    theDate.value = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
});
}

const refreshTime = setInterval(theUpdatedTime, 1000)

const localTimeString =
    new Date().toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit'
    });


onMounted(() => refreshTime)

onUnmounted(() => clearInterval(refreshTime))

</script>

<template>
    <v-row id="date-time" class="d-flex-column justify-space-around ">
       <div> {{ theDate }} </div> <div>{{ theTime }}</div>
    </v-row>
</template>

<style scoped>
#date-time{
    display:block;
   
    justify-content: center;
}
</style>