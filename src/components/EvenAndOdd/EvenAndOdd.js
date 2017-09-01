import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  updateUserInputValue(val) {
    this.setState({
      userInput: val
    })
  }

  assignEvenAndOdds(userInput) {
    let stringToArr = userInput.split('');
    const evens = [],
          odds = [];

    stringToArr.forEach(el => {
      if (isNaN(el)) {
        alert("You sure that's a number?");
      }
      else {
        el % 2 === 0 ? evens.push(+el) : odds.push(+el)
      }
    })

    this.setState({
      evenArray: evens,
      oddArray: odds
    })
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens And Odds</h4>
        <p>Give me a number, any long number...</p>
        <input className="inputLine" onChange={ (e) => this.updateUserInputValue(e.target.value) } />
        <button className="confirmButton"  onClick={() => this.assignEvenAndOdds(this.state.userInput)}>Split them digits!</button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}
