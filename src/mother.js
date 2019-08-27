import React from 'react';
import Blink from './blink.js'
import key from './key.js';

var k = new key(0);

export default class Mother extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: "100",
            left:"0"
        }
    }

    loadTemplate() {
        return (
            <Blink 
                width={this.state.width}
                top={0}
                key={k.number()}
                keyNum={k}
            />
        )
    }

    render() {
        return (
            <div
                id="bigguy"
                style={{
                    width:"100vw",
                    position:"relative"
                }}    
            >
                {this.loadTemplate()}
            </div>
        );
    }
}