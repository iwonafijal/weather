import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=Warsaw&aqi=no`
      )
      .then((data) => {
        setWeather(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Event
  const weatherInput = (e) => {
    setInput(e.target.value);
  };

  const searchWeather = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}`
      )
      .then((data) => {
        setWeather(data.data);
      });
  };

  const renderTemperature = () => (
    <h3>
      {isCelsius ? weather.current.temp_c : weather.current.temp_f}
      <sup>o </sup>
      {isCelsius ? "C" : "F"}
    </h3>
  );

  const toggleTemperatureUnit = () => setIsCelsius(!isCelsius);

  return (
    <StyledContainer>
      <StyledSearchContainer>
        <input onChange={weatherInput} type="text" placeholder="City" />
        <button onClick={searchWeather}>Search</button>
      </StyledSearchContainer>
      {weather && (
        <StyledBox>
          <StyledWeatherInfo>
            <StyledWeatherLocation>
              <h1>{weather.location.name},</h1>
              <h2>{weather.location.country}</h2>
            </StyledWeatherLocation>
            <h3>{weather.current.last_updated}</h3>
          </StyledWeatherInfo>
          <StyledWeatherConditions>
            <h2>{weather.current.condition.text}</h2>
            <img src={weather.current.condition.icon} alt="weather" />
            {renderTemperature()}
            <p onClick={toggleTemperatureUnit}>
              {` Change to ${isCelsius ? "Fahrenheit" : "Celsius"}`}
            </p>
          </StyledWeatherConditions>
        </StyledBox>
      )}
    </StyledContainer>
  );
};

// styled components

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledBox = styled.div`
  width: 100%;
  max-width: 400px;
  height: 480px;
  position: relative;
  text-align: center;
  box-shadow: 0px 1px 4px 2px rgba(152, 152, 152, 0.32);
  background: linear-gradient(
    180deg,
    rgba(142, 186, 210, 1) 18%,
    rgba(83, 124, 150, 1) 80%
  );
`;

const StyledSearchContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const StyledWeatherInfo = styled.div`
  height: 50%;
  h3 {
    font-size: 1rem;
    padding-top: 1rem;
  }
`;

const StyledWeatherLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  h1 {
    font-size: 2.8rem;
  }
`;

const StyledWeatherConditions = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    max-width: 150px;
  }
  h3 {
    font-size: 1.3rem;
    padding-bottom: 0.4rem;
  }
  sup {
    font-size: 0.7rem;
  }
  p {
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

export default Weather;
