import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "deesa",
    feelsLike: 35.63,
    humidity: 70,
    temp: 30.24,
    tempMax: 30.24,
    tempMin: 30.24,
    weather: "overcast clouds",
  });

let updateinfo=(newinfo)=>{
    setWeatherInfo(newinfo);
}

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Weather App</h1>
      <SearchBox updateinfo={updateinfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}

export default WeatherApp;
