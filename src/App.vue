<template>
<v-app>
  <v-navigational-drawer>
    <v-list-item title="Davis Console"></v-list-item>
    <v-divider></v-divider>
    <v-list-item to="/weather" link title="Weather"></v-list-item>
    <v-list-item to="/connection" link title="Cxn Settings"></v-list-item>
    <v-list-item link title="Graphs"></v-list-item>

  </v-navigational-drawer>
  <v-main>
    <router-view />
  </v-main>
  
</v-app>
  
</template>

<script setup>
  //
</script>
