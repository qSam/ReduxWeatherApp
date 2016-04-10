import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


export class WeatherList extends Component {

  renderWeather(cityData){
    //console.log('City Data is : ', cityData.city.name);
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    console.log(temps);

    return ( <tr key= {name}>
      <td>{ name }</td>
      <td><Chart data={temps} color="orange" units="K"/></td>
      <td><Chart data={pressure} color="green" units="hPa"/></td>
      <td><Chart data={humidity} color="black" units="%"/></td>
    </tr>
  );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (Kelvin)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
            { this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);
