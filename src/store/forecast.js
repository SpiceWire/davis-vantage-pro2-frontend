import { defineStore } from 'pinia'

import WebService from '../services/WebService'

//This store is defined as a pinia Option Store 

export const useForecastStore = defineStore('forecast',  {
    state: () => ({
        forecast : {},
        
    }),
    getters: {
        getForecast(state) {
            console.log("Forecast store getForecast was called")
            return state.forecast
        },
        getForecastHeader(state){
            console.log("forecast store getForecastHeader was called")
            return state.forecastHeaderName
        },
    },
    actions: {
          async fetchForecast() {
            try {
                console.log("store.fetchHForecast called ")
                const forecastDataQuery = await WebService.getForecast()
                this.forecast = forecastDataQuery.data
                
            }
            catch(error){

                alert("ForecastStore fetch error: " + error)
            }
            finally{
                console.log("Store says forecast is ", this.forecast)
            }
        },
      
    },
        
   
})