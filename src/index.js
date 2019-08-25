import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Blink = ( props ) => {
    // todo: logic for da boxes!!
    return (
        <div style={{
            backgroundColor:"white",
            width:props.width + "%",
            height:props.height + "%"
        }}
                onClick={ () => {
                    props.onClick()
                    
                }
                }>

        </div>
    )
    
}


class Mother extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: "100",
            height: "100"
        }
    }

    changeWidth(oldWidth) {
        this.setState({
            width: oldWidth/2
        })
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
                <Blink width={this.state.width}
                       height={this.state.height}
                       onClick={ () => this.changeWidth(this.state.width)}
                />
            </div>
        );
    }
}
ReactDOM.render(
    <Mother />,
    document.getElementById('root')
  );