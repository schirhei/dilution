import React from 'react';
import Blink from './blink.js'

export default class Mother extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: "99",
            left:"0",
            keyNum: 0
        }
    }

    rightClick() {
        return ""
    }

    loadTemplate() {
        return (
            <Blink 
                width={this.state.width}
                top={0}
                key={this.state.keyNum}
                keyNum={this.state.keyNum}
                parentClick={this.rightClick}
            />
        )
    }

    render() {
        return (
            <div>
                {this.loadTemplate()}
            </div>
        );
    }
}