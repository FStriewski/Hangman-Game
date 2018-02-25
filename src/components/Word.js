
import React, { Component } from 'react';
import './Word.css';
import { connect } from 'react-redux'
//import {wordToGuess, wordHidden} from './wordRepos'


class Word extends Component {

  render() {
    return (
      <div className="Word">
      {this.props.replace.wordToGuess}<br/>
      {this.props.replace.wordHidden}
      </div>
    );
  }
}

const mapStateToProps = ({ replace }) => ({ replace })
export default connect(mapStateToProps, {})(Word)
