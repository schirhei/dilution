import React from 'react';
import Blink from './blink.js'

export default class Mother extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: "100",
            top:"0",
            keyNum: 0
        }
    }

    rightClick() {
        return ""
    }

    loadTemplate() {
        return (
            <Blink 
                height={this.state.height}
                top={this.state.top}
                left={0}
                key={this.state.keyNum}
                keyNum={this.state.keyNum}
                parentClick={this.rightClick}
            />
        )
    }

    render() {
        return (
            <div 
                style={{
                    backgroundColor:"black",
                    position:"absolute",
                    height:"100vh",
                    width:"100vw",
                    top:"0",
                    left:"0",
                    margin: "0"
                }}
            >
                {this.loadTemplate()}
            </div>
        );
    }
}