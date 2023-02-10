import './App.css';
import OpenWeather from 'react-open-weather-widget';
import 'react-open-weather-widget/lib/css/ReactWeather.css' 
import AreaSearch from './components/AreaSearch'
import { useState } from 'react';
function App() {
  const [areaInfo,setAreaInfo] = useState({
    lat:'33.4890113',
    lon:'126.4983023'
  })

  console.log(areaInfo)
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
