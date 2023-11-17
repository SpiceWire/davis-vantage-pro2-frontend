import axios from 'axios';
import {ref, computed} from 'vue'

// var uniqueNumber =computed(()=> {
//   return Date.parse(new Date)/1000
// })

function uniqueNumber() {
  console.log("unique number called")
  return Date.parse(new Date)/1000
}

const http = axios.create({
  baseURL: "http://localhost:8080/"
});


export default {

  getWeather() {
    return http.get('/weather/' + uniqueNumber());
  },
  getNewWeather(){
    return http.get('/weather/new')
  },
  getSettings(){
    return http.get('/vp2/settings')
  },
  applySettings(settingsObj){
    console.log("Webservice says: Settings obj is: " + settingsObj)
    return http.post('/vp2/settings', settingsObj)
  },
  getOne(id) {
    return http.get(`/topics/${id}`)
  }
  

}