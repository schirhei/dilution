import React from 'react';
import Blink from './blink.js'
//import key from './key.js';

//var k = new key(0);

export default class Mother extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            template: [ 
                { text:"middle", 
                 children: [{ text:"bottom",
                              children: [null] },
                            { text:"bottom-side",
                              children: [null] }
                           ]
                            },
                { text:"middle-side", 
                    children: [{ text:"middle-side", 
                    children: [null]
                }]
                },
                { text:"middle-side", 
                    children: [null]
                }
                            
            ]  
                
            
        }
    }

    loadTemplate() {
        return (
            <Blink 
                text={this.state.template[0].text}
                children={this.state.template}
                width={100}
                left={0}
            />
        )
    }

    render() {
        return (
            <div
                id="bigguy"
                style={{
                    width:"100vw",
                    top:"-30vh",
                    position:"absolute"
                }}    
            >
                {this.loadTemplate()}
            </div>
        );
    }
}