import React, { Component } from "react";
import countries from "./../countries";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { country: null };

    this.cca3ToCountry = this.cca3ToCountry.bind(this);
  }

  cca3ToCountry(cca3) {
    return countries.find(country => country.cca3 === cca3);
  }

  static getDerivedStateFromProps(props, state) {
    const country = countries.find(
      country => country.cca3 === props.match.params.cca3
    );
    return { country };
  }

  render() {
    if (this.state.country) {
      return (
        <div>
          <h1>{this.state.country.name.common}</h1>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{this.state.country.capital.join(", ")}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{this.state.country.area}km2</td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {(this.state.country.borders.length !== 0 &&
                      this.state.country.borders.map(cca3 => (
                        <li key={cca3}>
                          <Link to={"/" + cca3}>
                            {" "}
                            {this.cca3ToCountry(cca3).name.common}
                          </Link>
                        </li>
                      ))) || <p>No borders</p>}
                  </ul>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    } else return <div>Countries loading...</div>;
  }
}
