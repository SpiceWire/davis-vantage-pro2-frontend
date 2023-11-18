
<script setup>
import { onMounted } from 'vue'

const props = defineProps(
    ["param", "val"]
)


</script>
<style >
    
</style>

<template >
    <div>
        {{ param }} &nbsp; &nbsp; {{ val }}
    </div>
</template>