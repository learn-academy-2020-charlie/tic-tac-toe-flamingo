import React, { Component } from 'react'

class Square extends Component{
    constructor(props) {
      super(props)
    }

  handleClick = () => {
    this.props.handleLocation(this.props.index)
  }
  
  render(){
    return(
      <React.Fragment>
        <div 
        id="square"
        onClick={ this.handleClick}
        >
          { this.props.value }
        </div>
      </React.Fragment>
    )
  }
}
export default Square
