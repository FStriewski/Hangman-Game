import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Statbox.css';

class Statbox extends Component {
  render() {
    return (
      <div className="Statbox">
        <div>Player wrote: </div>
        <br/><br/>
        <div>Wrong attempts: </div>
      </div>
    );
  }
}

export default Statbox;
