import { defineStore } from 'pinia'

import WebService from '../services/WebService'

//This store is defined as a pinia Option Store 

export const useForecastStore = defineStore('forecast',  {
    state: () => ({
        forecast : {},
        
    }),
    getters: {
        getForecast(state) {
            console.log("Forecast store getForecast was called. Store thinks forecast is: ")
            console.log("forecast" , state.forecast)
            return state.forecast
        },
        getProperties(state){
            console.log("Forecast store getProperties was called. Store thinks properties are: ")
            var theseProperties = state.forecast.properties
            console.log(theseProperties)
            return theseProperties
        },
        getElevation(state){
            console.log("Forecast store getElevation was called. Store thinks elevaton is: ")
            var thisElevaton = state.forecast.properties
            console.log(thisElevaton)
            return thisElevaton
        }

    },
    actions: {
          async fetchForecast() {
            try {
                
                const forecastDataQuery = await WebService.getForecast()
                this.forecast = forecastDataQuery.data
                console.log("store.fetchForecast called. Forecast is: ", this.forecast )
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