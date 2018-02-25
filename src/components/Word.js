
import React, { Component } from 'react';
import './Word.css';
import { connect } from 'react-redux'
import {wordToGuess, wordHidden} from './wordRepos'


class Word extends Component {

  render() {
    return (
      <div className="Word">
      {wordToGuess}<br/>
      {wordHidden}
      </div>
    );
  }
}

const mapStateToProps = ({ word }) => ({ word })
export default connect(mapStateToProps, {})(Word)
