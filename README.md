# WP Masters Weather App

Weather App built with React.
[Live Demo](https://wpmasters-weather-app.vercel.app/)

## Tech Stack

**React, Typescript, Redux-Toolkit, StyledComponents**

## Features

- **Weather forecast for any city or place**
- **Extended 7 days forecast**
- **Find user location weather by utilizing GeolocationAPI**
- **One-click Celcius to Fahrenheit conversion and vice versa**
- **Dark Mode**

## Getting Started

First you need an API key from OpenWeatherMap, you can get one by creating an account on their website.
After you got your API key, create a **.env** file at root directory of project, copy the line below to the file and replace YOUR_KEY with your OpenWeatherMap API Key.

```
REACT_APP_WEATHER_API_KEY=YOUR_KEY
```

Finally clone this repository, install dependencies and run the local server

```bash
git clone https://github.com/xxxzez/wpmasters-weather-app.git
```

```bash
cd wpmasters-weather-app
npm install
npm start
```

## Credits

[OpenWeatherMap](https://openweathermap.org/ 'OpenWeatherMap') (Weather data API)

[RapidAPI](https://rapidapi.com/hub/ 'RapidAPI') (Place suggestion API)

[Icons8.com](https://www.icons8.com 'Icons8.com') (Weather icons)
