import React, { Component } from 'react';
import './Word.css';
import { connect } from 'react-redux'

class Word extends Component {
  render() {
    return (
      <div className="Word">
        <div>_____</div>
      </div>
    );
  }
}


export default connect()(Word)
