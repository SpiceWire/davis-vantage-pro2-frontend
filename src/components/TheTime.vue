<script setup>
import { ref, onMounted, onBeforeMount, onUnmounted } from 'vue'

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
    year: 'numeric'
    
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
    <div id="date-time">
        {{ theDate }} {{ theTime }}
    </div>
</template>

<style scoped>
#date-time{
    display:block
}
</style>