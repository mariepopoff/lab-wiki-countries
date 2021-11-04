import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import countries from './countries.json';

export default class CountriesList extends Component {
 
  render() {
    return (
      <div class="list-group">
        {this.props.countries.map((country) => {
            return (
          <Link class="list-group-item list-group-item-action" key={country.cca3} exact to={'/' + country.cca3}>
            <p>{country.flag}{country.name.common}</p>
          </Link>
            )
        })}
      </div>
    );
  }
}
