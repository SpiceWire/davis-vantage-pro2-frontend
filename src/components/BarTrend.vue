<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();


const props = defineProps(
    ["barTrendIconName"]
)


var barTrendIcon = computed(() => {
    return "fa-solid " + props.barTrendIconName
})

</script>

<template>
    <div class="barTrendClass">
        <v-icon  > {{ barTrendIcon }}</v-icon>
    </div>
</template>

<style scoped>
.barTrendClass {
    color: black;
    font-size: 20pt;
    margin-left: 5px;
}
</style>