<template>
  <v-app class="app">
    <v-card class="app-bar">
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Weather Station Interface</v-toolbar-title>
        {{ drawer }}
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer"  temporary>
        <v-list-item to="/weather" link title="Weather"></v-list-item>
        <v-list-item to="/connection" link title="Cxn Settings"></v-list-item>
        <v-list-item link title="Graphs"></v-list-item>
      </v-navigation-drawer>
    </v-card>


    <v-main class="main-area">
      <router-view />
    </v-main>

  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const drawer = ref(false)

onMounted(() => {
  drawer.value = false
})

</script>

<style scoped>
.app {
  display: flex;
}

.app-bar {
  display: block;
  position: absolute;
  height: 150px;
  padding-bottom: 100px;
  margin-bottom: 100px;
  overflow: hidden;
  z-index: 2000;
}

.drawer {
  position: fixed;
  display: block;
  padding-top: 20px;
  z-index: 2000;
  opacity: 1;
  background-color: aliceblue;
}

.main-area {
  margin-top: 50px;
  padding-top: 30px;

  display: block;
  position: relative;
}
</style>
