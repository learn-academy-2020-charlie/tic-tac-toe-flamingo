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
        disabled = {this.props.clickDisabled} 
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
