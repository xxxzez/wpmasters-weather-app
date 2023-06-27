# WP Masters Weather App
![Screenshot 2023-06-27 073505](https://github.com/xxxzez/wpmasters-weather-app/assets/47398536/6ba6a3f9-fede-4d99-8c2a-635ba7de1ff1)
![Screenshot 2023-06-27 073612](https://github.com/xxxzez/wpmasters-weather-app/assets/47398536/c3b98883-ee11-44e0-95e5-7e1b11adb29d)

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
