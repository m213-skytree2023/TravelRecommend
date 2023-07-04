import React from "react";

const Weather = (props) => {
  return (
    <>
      <table class="table table-borderless text-white font-weight-light">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Weather</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Weather;
