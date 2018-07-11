import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "ecb953f0ffcfc3d27551ccfd634c2654";

export default class App extends React.Component {
  // async await way to fetch the apicall

  getWeather = async e => {
    /*when you use onsubmit on your form 
  you have to use preventDefault method to avoid rerun the whole page 
  whenevre you click on the button */
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`
    );
    /* so because I am using "async await " i dont not need to 
  use JSON.parse or JSON.stringfy [thanks async await]*/

    const data = await api_call.json();

    //Because i havent called the getWeather function,i cann't see anything of consoling.log the data!
    console.log(data);
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}
