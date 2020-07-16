import React, { Component } from 'react'

class Restart extends Component{

    restart = () => {
        this.props.restartGame()
    }

    render(){
        return(
            <React.Fragment>
            <div id = "button1">
            <button onClick = {this.restart}>
            Restart!
            </button>
            </div>
            </React.Fragment>
        )
    }
}
export default Restart
