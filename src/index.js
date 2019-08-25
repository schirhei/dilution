import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*var template = [
    {
        "text":"i am a parent",
        "children":[
            1,
            2
        ]
    },
    {
        "text":"piano",
        "children":[
            3,
            4
        ]
    },
    {
        "text":"saxophone",
        "children":[

        ]
    },
    {
        "text":"guy yelling",
        "children":[

        ]
    },
    {
        "text":"audience",
        "children":[

        ]
    }
]*/

class Blink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: this.props.width,
            height: this.props.height,
            top: this.props.top,
            right: this.props.right,
            children: [],
            isNew: true
        }
    }

    leftClick(isNew){
        if (isNew){
            this.setState(state => {
                const newRight = parseInt(state.right) / 2;
                const children = state.children.concat(
                    <Blink 
                        backgroundColor={'#'+Math.random().toString(16).substr(-6)} 
                        width={this.state.width} 
                        height={this.state.height}
                        top={this.state.top}
                        right={newRight}
                    />
                );
                const newWidth = this.state.width / 2;
                return {
                    children,
                    width: newWidth,
                    isNew: false
                  };
            })
        } else {
            console.log("todo: edit inside text");
        }
    }

    render() {
        return (
            <div 
                style={{
                    backgroundColor:'#'+Math.random().toString(16).substr(-6),
                    width:this.state.width + "%",
                    height:this.state.height + "%",
                    top:this.state.top + "%",
                    right:this.state.right + "%",
                    position:"absolute"
                }}
                onClick={ () => { this.leftClick(this.state.isNew) }}
            >
                { this.state.children }
            </div>
        )   
    }
    
}


class Mother extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: "100",
            height: "100",
            top:"0",
            right:"0"
        }
    }

    
    loadTemplate() {
        return (
            <Blink 
            width={this.state.width}
            height={this.state.height}
            top={this.state.top}
            right={this.state.right}
            backgroundColor={'#'+Math.random().toString(16).substr(-6)}
        />
        )
    }

    render() {
        return (
            <div style={{
                backgroundColor:"black",
                position:"absolute",
                height:"100vh",
                width:"100vw",
                top:"0",
                left:"0",
                margin: "0"
            }}>
                {this.loadTemplate()}
            </div>
        );
    }
}

ReactDOM.render(
    <Mother />,
    document.getElementById('root')
  );