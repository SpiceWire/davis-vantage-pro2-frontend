// import { ForecastModel } from '../ForecastModel'
// import WebService from '../services/WebService'

// class ForecastService {
//     getStructuredForecast():Promise<ForecastModel[]> {

//         return WebService.getForecast()
//         .then((response) =>{
//             return response.data;
//         })
//         .then((forecastObj) =>{
//             const forecastmodel = forecastObj
//             .map((forecastObj: any) =>{
//             return {
//                 number: forecastObj.number,
//                 name: forecastObj.name,
//                 startTime: forecastObj.startTime,
//                 endTime: forecastObj.endTime,
//                 isDaytime: forecastObj.isDaytime,
//                 temperature: forecastObj.temperature,
//                 temperatureUnit: forecastObj.temperatureUnit,
//                 temperatureTrend: forecastObj.temperatureTrend,
//                 probabilityOfPrecipitation: {
//                     unitCode: forecastObj.probabilityOfPrecipitation.unitCode,
//                     value: forecastObj.probabilityOfPrecipitation.value
//                     },
//                 dewpoint: {
//                     unitCode: forecastObj.dewpoint.unitCode,
//                     value: forecastObj.dewpoint.value
//                     },
//                 relativeHumidity: {
//                     unitCode: forecastObj.relativeHumidity.unitCode,
//                     value: forecastObj.relativeHumidity.value
//                     },
//                 windSpeed: forecastObj.windSpeed,
//                 windDirection: forecastObj.windDirection,
//                 icon: forecastObj.icon,
//                 shortForecast: forecastObj.shortForecast,
//                 detailedForecast: forecastObj.detailedForecast
//             } as ForecastModel
//          }); 
//         })
//     }
// }