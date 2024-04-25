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


//add "last updated" to weather page
//add "date displayed" to past weather
//add "server is online" heartbeat
//add btn to close server response in Connections.vue
//add help page. mention that fazecast does not have a "get timeout mode" function
//delete unused components: ChyronMessage, HelloWorld, TheMoon, AnyWarnings, TheChyron
//add graph points from LOOP2 data
//add sunrise and sunset from LOOP1 data
//add alarms from LOOP1 data
//add combined wind speed, direction to hourly search
//add weather alerts
//offer hourly forecast option
//delete pinia app store?
//add moon and ephemera
//add openhab compatability
//add menu of available vars for 24 hour summary
//Add a console page with battery level, type of console, receivers, etc.
//Re-evaluate if wind gust icons should dynamically color based on wind speed

