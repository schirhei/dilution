import React from 'react';
import Blink from './blink.js'
import Menu from './menu.js'
import key from './key.js';
var k = new key(0);

/*template: [ {text:"", children: [
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
                   
            ]*/
export default class Mother extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password:"password",
            render:"",
            
        }
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        // can't do it in state because template hasnt been mounted yet
        
        
        var url = 'http://localhost:8080/api/' + this.props.match.params.id;
        console.log(url);

        var newTemplate = [];
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            /// MESSED UP
            newTemplate = data[0].template;
            this.setState({render: <Blink key={81238189} peers={ data[0].template } k={ k }/>})
            this.setState({ template: data[0].template })
            
            console.log(this.state.template)
        })
        .catch(err => {
            newTemplate = [];
        })
    }

    update() {
        this.setState({
            render: <Blink key={Math.floor(Math.random() * 100000)} peers={ this.state.template } k={ k }/>
        })
    }

    render() {
        console.log("happen")
        console.log(this.state.render)
        return (
            
            <div id="bigguy">
                { this.state && this.state.template &&
                    <div>{ this.state.render }</div>
                }   
                
                <Menu update={this.update} template={this.state.template} password={this.state.password}/>
                
            </div>

        );
    }
}