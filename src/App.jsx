import hotBg from './assets/hot.jpg'
import { getFormattedWeatherData } from './weatherService';
import coldBg from './assets/cold.jpg'
import Descriptions from './components/Descriptions';
import { useEffect } from 'react';
function App() {

  useEffect(()=>{
    const fetchWeatherData=async()=>{
    const data = await getFormattedWeatherData("paris")
    console.log(data);
    }
    fetchWeatherData();
  },[])



  return (
    <div className="app" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder='Enter city...' />
            <button>°F</button>
          </div>
          <div className="section section__temperature"></div>
          <div className="icon">
            <h3>London, GB</h3>
            <img src="	https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
              alt="Weather"
            />
            <h3>Cloudy</h3>
          </div>
          <div className="temperature">
            <h1>34°C</h1>
          </div>
          {/*Bottom Description*/}
          <Descriptions/>
        </div>
      </div>

    </div>
  );

}


export default App;
/*
import { useState} from "react";


export default function App() {
  const [name, setName]=useState("hello")
  
 
  
  return(
    <>
    <button onClick={()=>{setName("hi")}}>Click</button>
    <h1>{name}</h1>
    </>
  )
  
}*/