import React, { Component } from 'react'

class Message extends Component{
    constructor(props) {
      super(props)
    }


  render(){
    return(
      <React.Fragment>
        <div id = "message">
            <h2> {this.props.gameResult()} </h2>
        </div>
      </React.Fragment>
    )
  }
}
export default Message
