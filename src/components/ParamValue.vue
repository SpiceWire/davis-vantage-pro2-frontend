
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
        <v-row>
            <v-col cols="2">
                 {{ val }}
            </v-col>
            <v-col cols="auto">
               {{ param }}
            </v-col>
        </v-row>
     
      </div>
        
    
</template>