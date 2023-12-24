import { defineStore } from 'pinia'

import WebService from '../services/WebService'

//This store is defined as a pinia Option Store 
//elClima is the weather object plus a keyID 
export const useClimaStore = defineStore('clima',  {
    state: () => ({
        clima : {},
    }),
    getters: {
        getElClima(state) {
            return state.clima
        },

    },
    actions: {
          async fetchClima() {
            try {
              
                const datum = await WebService.getWeather()
 
                datum.data.keyID = Date.parse(new Date)/1000

                this.clima = datum.data

            }
            catch(error){
                console.log("Clima store error status:" + error.response.status)
                console.log("Clima store error data:" + error.response.data)
                alert("Clima store fetch error: " + error)


            }
        }
    },
        
   
})