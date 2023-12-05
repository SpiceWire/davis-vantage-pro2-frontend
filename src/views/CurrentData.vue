<template >
    <div>
        <div></div>
    </div>
</template>
<script setup>
import { useCommandStore } from '@/store/command';
import {ref, computed} from 'vue'

const store = useCommandStore()

const currentDataText = computed(()=> {
    return store.currentDataText
})

const currentDataEvalText = computed(()=> {
    return store.currentDataEvalText
})

const lastCommandSent = computed(()=> {
    return store.lastCommandSent
})

const errorMessage = computed(()=> {
    return store.errorMessage
})


</script>
<style >
    
</style>