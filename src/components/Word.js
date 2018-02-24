import React, { Component } from 'react';
import './Word.css';
import { connect } from 'react-redux'

class Word extends Component {


  render() {
    return (
      <div className="Word">
      {this.props.word.wordHidden}
      </div>
    );
  }
}
/*
const mapStateToProps = (state) => {
  // return an object with the prop names (keys) and prop values
  // taken from the reduxState (values)
  return {
    word: state.wordToGuess,
    //wordHidden: state.wordHidden
  }
}
*/
// Then pass it to connect:
const mapStateToProps = ({ word }) => ({ word })
export default connect(mapStateToProps, {  })(Word)
