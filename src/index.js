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
            height: this.props.height,
            left: this.props.left,
            top: this.props.top,
            children: [],
            isNew: true,
            layer: this.props.layer
        }
    }

    leftClick(isNew){
        if (isNew){

            this.setState(state => {
                const newLayer = state.layer + 1;
                const children = state.children.concat(
                    <Blink 
                        backgroundColor={'#'+Math.random().toString(16).substr(-6)} 
                        height={this.state.height}
                        top={this.state.top}
                        layer={newLayer}
                        left={30}
                    />
                );
                return {
                    children,
                    isNew: false
                  };
            })
        } else {
            console.log("todo: edit inside text");
        }
    }

    rightClick(e) {
        if (e.nativeEvent.which === 3) {
            e.preventDefault()
            console.log('Right click');
        }
      }
      
    render() {
        return (
            <div 
                style={{
                    backgroundColor:'#'+Math.random().toString(16).substr(-6),
                    width: "30vw",
                    height:this.state.height + "%",
                    top:this.state.top + "%",
                    left:this.state.left + "vw",
                    position:"absolute"
                }}
                onClick={ () => { this.leftClick(this.state.isNew) }}
                onContextMenu={this.rightClick}
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
            height: "100",
            top:"0",
            layer: 0
        }
    }

    
    loadTemplate() {
        return (
            <Blink 
            height={this.state.height}
            top={this.state.top}
            left={0}
            layer={this.state.layer}
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