import React, { Component } from 'react'

class Restart extends Component{

    restart = () => {
        this.props.restartGame()
    }

    render(){
        return(
            <React.Fragment>
                <button onClick = {this.restart}>
                    Restart!
                </button>
            </React.Fragment>
        )
    }
}
export default Restart