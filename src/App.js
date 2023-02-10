import './App.css';
import OpenWeather from 'react-open-weather-widget';
import 'react-open-weather-widget/lib/css/ReactWeather.css' 
import AreaSearch from './components/AreaSearch'
import { useState, useEffect } from 'react';
function App() {
  const [areaInfo,setAreaInfo] = useState(undefined)

  const currentPostion = () => {
    const positionCurrent =  navigator.geolocation.getCurrentPosition((position)=>{
        const { latitude, longitude } = position.coords;
        console.log(latitude,longitude)
        setAreaInfo({ lat: String(latitude), lon: String(longitude) })
    })

}
  useEffect(()=>{
    currentPostion();
  },[])

  return (
    <div className="App">
    <AreaSearch setAreaInfo={setAreaInfo} />
    {areaInfo && <OpenWeather
      forecast="5days"
      apikey="1f8ed734823781216a3c57170a63d19b"
      type="geo"
      lat={areaInfo.lat}
      lon={areaInfo.lon}
    />}
    </div>
  );
}

export default App;
