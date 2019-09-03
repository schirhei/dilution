import React from 'react';
import Blink from './blink.js'
import Menu from './menu.js'
import key from './key.js';
var k = new key(0);

export default class Mother extends React.Component {
    constructor() {
        super()
        this.state = {
            password:"password",
            render:"",
            template: [ {text:"", children: [
                { text:"middle", 
                  children: [{ text:"",
                               children: [null] },
                             { text:"",
                               children: [null] }]
                },
                { text:"middle-side", 
                  children: [{ text:"", 
                               children: [null] }]
                },
                { text:"", 
                    children: [null]
                }    
            ]}
                   
            ]
        }
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        // can't do it in state because template hasnt been mounted yet
        this.setState({
            render: <Blink key={81238189} peers={ this.state.template } k={ k }/>
        })
    }

    update() {
        this.setState({
            render: <Blink key={Math.floor(Math.random() * 100000)} peers={ this.state.template } k={ k }/>
        })
    }

    render() {
        return (
            <div id="bigguy">
                { this.state.render }
                <Menu update={this.update} template={this.state.template} password={this.state.password}/>
            </div>
        );
    }
}