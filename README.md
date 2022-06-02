## Installation 

```
npm install -g aurelia-cli
```

```
au new
```

select " Default TypeScript "
select "Yes"


## Running 

```
au run --watch
```

## Components
```
au generate component Header
```
Then write "/components"

components/header.html :

```html
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">${appTitle}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
    </div>
  </nav>
</template>
```

components/header.ts : 
```ts
export class Header {
  appTitle: string;

  constructor() {
    this.appTitle = 'WeatherApp';
  }
}
```
Create src/app.css
```css
/* src/app.css */

.container {
  margin-top: 2rem;
}
```

index.ejs : 
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><%- htmlWebpackPlugin.options.metadata.title %></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="<%- htmlWebpackPlugin.options.metadata.baseUrl %>">
    
    <!-- Add styles for Bootswatch here -->
    <link rel="stylesheet" href="https://bootswatch.com/4/solar/bootstrap.min.css">
    <!-- end Bootswatch -->
    <!-- imported CSS are concatenated and added automatically -->
  </head>
  <body aurelia-app="main">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>
```
webpack.config.js: 

```

```

src/services/weather-service.ts: 


```ts
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
    const appId = '<your api key>';
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
```

```
npm i aurelia-http-client
```

