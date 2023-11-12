<script setup>
import { onMounted } from 'vue'

const props = defineProps(
    ["chryMessage"]
)


</script>

<template>
<div>{{ props.chryMessage }}</div>

</template>

<style scoped>


</style>