import axios from 'axios';
import {ref, computed, h} from 'vue'

//generates a unique time-based number as a nonce.
function uniqueNumber() {
  return Date.parse(new Date)/1000
}

const http = axios.create({
  baseURL:`http://${location.hostname}:8080`
});

export default {

  getWeather() {
    return http.get('/weather/' + uniqueNumber());
  },
  
  getNewWeather(){
    return http.get('/weather/new')
  },

  getRecord(recordType, days){
    return http.get(`/record/${recordType}/${days}`)
  },
  
  getSettings(){
    return http.get('/vp2/settings/' + uniqueNumber())
  },

  applySettings(settingsObj){
    return http.post('/vp2/settings/' + uniqueNumber(), settingsObj)
  },

  getData(cmd){
    return http.get(`/vp2/currentData/${cmd}/${uniqueNumber()}`)
  },

  getTesting(cmd){
    return http.get(`/vp2/testing/${cmd}/${uniqueNumber()}`)
  },

  getHourly(headerName){
    return http.get(`/record/header/${headerName}`)
  },

  getForecast(){
    return http.get(`/forecast/${uniqueNumber()}`)
  },

  getForecastByAddress(street, city, state, zip){
    const address ={
      ['streetAddress']: street,
      ['city']: city,
      ['state']: state,
      ['zip']: zip
    }
    return http.post(`/forecast/address`, address)
},

 getForecastByLatLon(latitude, longitude){
  const latLon = latitude + "," + longitude
  return http.post("/forecast/latLon", {latLon:latLon})
 },

 setDefaultLocationByAddress(street, city, state, zip){
  const address ={
    ['streetAddress']: street,
    ['city']: city,
    ['state']: state,
    ['zip']: zip
  }
  return http.post(`/forecast/default/address`, address)
 },

 setDefaultLocationByCoordinates(latitude, longitude){
  console.log("setDefaultLocationByCoordinates called in WebService. Lat and Long are " + latitude + " " + longitude)
  const latLon = latitude + "," + longitude
  return http.post("/forecast/default/latLon", {latLon:latLon})
 }
  

}