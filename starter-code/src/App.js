import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import CountryDetails from "./views/CountryDetails";
import countries from "./countries";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavbar />
        <div className="row">
          {/* Check CSS oberflow to scroll */}
          <div className="col-5">
            <div className="list-group">
              {countries.map(country => (
                <Link
                  to={"/" + country.cca3}
                  key={country.cca3}
                  className="list-group-item list-group-item-action active"
                >
                  {country.flag} {country.name.common}
                </Link>
              ))}
            </div>
          </div>
          <Switch>
            <Route path="/:cca3" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}
