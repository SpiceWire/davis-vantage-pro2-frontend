export interface ForecastModel {
    number: Number,
    name: String,
    startTime: String,
    endTime: String,
    isDaytime: Boolean,
    temperature: Number,
    temperatureUnit: String,
    temperatureTrend: String,
    probabilityOfPrecipitation: {
        unitCode: String,
        value: Number
        },
    dewpoint: {
        unitCode: String,
        value: Number
        },
    relativeHumidity: {
        unitCode: String,
        value: Number
        },
    windSpeed: String,
    windDirection: String,
    icon: String,
    shortForecast: String,
    detailedForecast: String
}

