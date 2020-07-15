import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      turns: 0, 
      //disabled: false
    }
  }

  // Main logic to handle clicks
  handleLocation = (indexLocation) => {
    let { turns, squares } = this.state
    // if index location aready has and X or O
    if (squares[indexLocation] === 'X' || squares[indexLocation] === 'O') {
      // send an alert
      alert("Already selected!")
    } else {
      //and if not, then 
      //if turn is even, update squares with an 'X'
      if (turns % 2 === 0){
        squares[indexLocation] = 'X'
      } else {
        // turn is odd, update squares with an 'O'
        squares[indexLocation] = 'O'
      }
      // update turn to +1
      turns += 1
      // update the square with an X or O
      this.setState({squares: squares,  turns: turns})
      //if gameResult !== null then stop the game
     
    }  
  }

  checkWinner = () => {
    let { squares } = this.state
    // list the winning index combinations 
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // looping through the winning combinations
    for (let i = 0; i < winningCombos.length; i++) {
      // setting a, b, and c to the indexes in the nested array for each winning combo
      const [a, b, c] = winningCombos[i];
      // checking if the winning combos all have the same value (either X or O)
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        let winner = squares[a]
        return winner; // this will return either "X" or "O" 
      }
    }
    // if no winning combos, return null
    return null;


  }
  gameResult = () => {
    let {turns, squares, disabled} = this.state
      //then we check for a winner
      let winner = this.checkWinner()
      // if winner is and X or O
      if (winner) {
        //this.setState({disabled: true})
        return ( winner + ` is the winner!`) 
      } else if (turns === squares.length) {
        return "Cats Game!"
  } 
}

  render(){
    let square = this.state.squares.map((value, index) => {
      return(
        <Square
          value={ value }
          index={ index }
          handleLocation={ this.handleLocation}
        />
      )
    })
    return(
      <React.Fragment>
        <h1>Tic Tac Toe</h1>
        <div id = "board">
          {square}
        </div>
        <h2> {this.gameResult} </h2>
      </React.Fragment>
    )
  }
}
export default App
