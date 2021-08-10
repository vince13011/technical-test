import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

//components
import Home from "./Home";

//axios
import getCityImage from "../axios/unsplash";
import getWeather from "../axios/openweathermap";

function App() {
  const [weather, setWeather] = useState();
  const [cityImage, setCityImage] = useState();

  useEffect(() => {
    getCityImage("Marseille").then((response) => setCityImage(response));
    getWeather("Marseille").then((response) => setWeather(response));
  }, []);

  useEffect(() => {
    console.log("newmeteo", weather);
 
  }, [weather, cityImage]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home cityImage={cityImage} weather={weather} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
