import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
import countries from './countries.json';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { countries: null };
    console.log('I am in the CONSTRUCTOR of the App.js.');
  }

  componentDidMount() {
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => {
      this.setState({countries: response.data})
  })
  }
  render() {
    if (!this.state.countries) return <div>loading</div>
    return (
    <div className="App">
      <Navbar/>
      <div class="container">
      <div class="row">
      <div class="col-5" >
      <CountriesList countries = {this.state.countries}/>
      </div>
      <div class="col-7">
      <Switch>
      <Route path="/:cca3" component={CountryDetails} style={{height: "90vh", overflow: "scroll"}} />
      </Switch>
      </div>
      </div>
    </div>
    </div>
  );
}
}

export default App;
