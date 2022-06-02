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
```javascript
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

```

```

```

```

```

```