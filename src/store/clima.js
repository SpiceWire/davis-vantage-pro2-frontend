import { defineStore } from 'pinia'

import WebService from '../services/WebService'


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
                // console.log("Store says: fetchClima called.")
                const datum = await WebService.getWeather()
                // const datum = await axios.get('http://localhost:8080/weather')
                // console.log("clima store says: data data is: ")
                // console.log("datum1 =" + datum.data)
                datum.data.keyID = Date.parse(new Date)/1000
                // console.log('datum2 = ' + datum.data)
                this.clima = datum.data
                // console.log("clima = " + JSON.stringify(datum.data))
            }
            catch(error){
                alert("Store fetch error " + error)
                //console.log(error.JSON())
                //console.log(error.response.data)
            }
        }
    },
        
   
})