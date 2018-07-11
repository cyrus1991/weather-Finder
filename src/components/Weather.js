import React from "react";

export default class Weather extends React.Component {
  render() {
    return (
      <div>
        {/* && operator to show the p tags whenever we put the name of the city */}
        {this.props.city &&
          this.props.country && (
            <p>
              Location : {this.props.city} ,{this.props.country}
            </p>
          )}
        {this.props.temperture && <p> Temperture : {this.props.temperture}</p>}
        {this.props.humidity && <p>Humidity : {this.props.humidity}</p>}
        {this.props.description && (
          <p> Condition : {this.props.description}</p>
        )}{" "}
      </div>
    );
  }
}
