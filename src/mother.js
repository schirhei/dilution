import React from 'react';
import Blink from './blink.js'
//import key from './key.js';

//var k = new key(0);

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

        this.updateTemplate = this.updateTemplate.bind(this)
    }

    updateTemplate() {
        this.forceUpdate();
    }

    rightClick() {
        return ""
    }

    loadTemplate() {
        return (
            <Blink 
                text={this.state.template[0].text}
                peers={this.state.template}
                width={99}
                left={0}
                updateTemplate={this.updateTemplate}
                rightClick={this.rightClick}
            />
        );
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