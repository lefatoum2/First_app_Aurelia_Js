import { WeatherService } from './services/weather-service'
import { inject } from 'aurelia-framework';

@inject(WeatherService)
export class App {
  constructor(private weatherService: WeatherService) {}

  activate() {
    console.log('activate')
    this.forecast();
  }

  forecast() {
    this.weatherService.getForecast('New York').then(forecast => {
      console.log(forecast);
    }).catch(error => {
      console.log(error);
    });
  }
  public message: string = 'Hello World!';
}
