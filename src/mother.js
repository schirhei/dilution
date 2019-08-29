import React from 'react';
import Blink from './blink.js';

import key from './key.js';
var k = new key(0);

export default class Mother extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            template: [ {text:"", children: [
                { text:"middle", 
                  children: [{ text:"bottom",
                               children: [null] },
                             { text:"bottom-side",
                               children: [null] }]
                },
                { text:"middle-side", 
                  children: [{ text:"middle-side", 
                               children: [null] }]
                },
                { text:"middle-side", 
                    children: [null]
                }    
            ]}
                   
            ]  
        }
    }

    render() {
        return (
            <div id="bigguy">
                <Blink 
                    peers={ this.state.template }
                    k={ k }
                />
            </div>
        );
    }
}