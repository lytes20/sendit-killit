import React, { Component } from 'react';
import { connect } from 'react-redux';


const places = [
  'Kampala, Uganda',
  'Mbale, Uganda',
  'Mbarara, Uganda',
  'Gulu, Uganda',
  'Nairobi, Kenya',
  'Kisumu, Kenya',
  'Dar es salaam, Tanzania',
  'Dodoma, Tanzania',
];

class Select extends Component {
  
  handleChange(event) {
    const place = event.target.value;
    const loc = this.props.loc
    this.props.changeLoc(place, loc)
  }

  render() {
    return (
      <select
        value={this.props.selectedPlace}
        onChange={this.handleChange.bind(this)}
      >
        {places.map(place => {
          return (
            <option key={place} value={place}>
              {place}
            </option>
          );
        })}
      </select>
    );
  }
}

export default Select;
