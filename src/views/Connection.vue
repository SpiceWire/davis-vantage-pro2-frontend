
<script setup>
import WebService from '../services/WebService'
import { computed, reactive, onMounted, ref, onUpdated, nextTick } from 'vue'
// import ParamValue from '@/components/ParamValue.vue';
import CurrentSettings from '@/components/CurrentSettings.vue'
import { useCommStore } from '../store/comm';
import NewSettings from '@/components/NewSettings.vue';


const store = useCommStore();

// onMounted(() => 
//   store.fetchComm(),
//   )

//this runs but does not log to console
  onMounted(() => 
  console.log("Connection.vue is being mounted, will call commStore getComm"),
  store.getComm,
  )

</script>

<template >
    <div class="settings-container">
      <v-container>
      <v-row >
        <CurrentSettings />
     
         <NewSettings />
     
        </v-row>
      </v-container>  
    </div>


</template>

<style scoped>
.settings-container {
  border: red
}
</style>