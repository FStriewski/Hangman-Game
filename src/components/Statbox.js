import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Statbox.css';

class Statbox extends Component {
  render() {
    return (
      <div className="Statbox">
        <div>Player wrote: </div>
        <span>{this.props.logInput.guessesSoFar}</span>
        <br/><br/>
        <div>Wrong attempts: <div id="wrong_attempts"></div>
        <span>{this.props.countWrong.counter}</span></div>
      </div>
    );
  }
}

//export default Statbox;
const mapStateToProps = ({ logInput, countWrong }) => ({ logInput, countWrong })
export default connect(mapStateToProps, {})(Statbox)
