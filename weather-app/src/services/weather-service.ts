import { HttpClient } from 'aurelia-http-client';
import { autoinject } from "aurelia-framework";

@autoinject
export class WeatherService {
  constructor(private httpClient: HttpClient){
    this.httpClient.configure(config => {
      config
        .withBaseUrl('https://api.openweathermap.org/data/2.5/');
    });
  }

  getForecast(city: string) {
    const appId = 'cfe13ffc0ed739646109916072a3e6bf';
    return new Promise((resolve, reject) => {
      this.httpClient.get('forecast?q=' + city + '&appid=' + appId).then(httpResponse=> {
        var forecast = JSON.parse(httpResponse.response); 
        resolve(forecast);
      }).catch( error => {
        reject(error);
      });
    });
  }
}
