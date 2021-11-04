import React, { Component } from 'react';
import { Link } from "react-router-dom";
import countries from './countries.json';

export default class CountryDetails extends Component {
    render() {
        const { cca3 } = this.props.match.params;
        console.log(this.props.match.params)
  const country = countries.find((c) => c.cca3 === cca3);
        return (
            <div class="col-7">
            <h1>{country.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {country.borders.map((border, i) => {
                        return (
                          <li><Link  key={i} exact to={'/' + border}>
            <p>{countries.find((c) => c.cca3 === border).name.common}</p>
          </Link></li>
                        )
                    })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
        )
    }
}


