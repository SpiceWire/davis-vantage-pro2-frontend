/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import axios from 'axios'
// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)
app.config.globalProperties.axios = axios
app.mount('#app')


//add beat to wind icon
//add "server is online" heartbeat
//delete getOne from webservice

