import React from "react";

 
const Weather = props => (


    <div>
    {/* && operator to show the p tags whenever we put the name of the city */}
    {props.city && props.country && <p>
      Location : {props.city} ,{props.country}
    </p>}
       
    {props.temperture && <p> Temperture : {props.temperture}</p>}
    {props.humidity && <p>Humidity : {props.humidity}</p>}
    {props.description && (
      <p> Condition : {props.description}</p>
    )}
    {props.error && <p>{props.error}</p>}
  </div>


)


export default Weather;