import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "ecb953f0ffcfc3d27551ccfd634c2654";

export default class App extends React.Component {
  state = {
    temperture: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  // async await way to fetch the apicall

  getWeather = async e => {
    /* when you use onsubmit on your form 
  you have to use preventDefault method to avoid rerun the whole page 
  whenevre you click on the button */
    e.preventDefault();
    /* getting access to  the value of the input that we have created on 
    the Form component thereso we can get access to data of each city of each country the the user put*/

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    /* so because I am using "async await " i dont not need to 
  use JSON.parse or JSON.stringfy [thanks async await]*/

    const data = await api_call.json();

    //Because i havent called the getWeather function,i cann't see anything of consoling.log the data!
    console.log(data);

    if (city && country) {
      this.setState({
        temperture: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description
        
      });
    } else {
      this.setState({
      
        error: "Please chose the City and the Country!"
      });
    }
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperture={this.state.temperture}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}
