import React from "react";

const Weather = (props) => {
  return (
    <>
      <table className="table table-borderless text-white font-weight-light">
        <thead>
          <tr>
            <th scope="col">Weather</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.weather.desc}</td>
            <td>{props.weather.tempmax}</td>
            <td>{props.weather.tempmin}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Weather;
