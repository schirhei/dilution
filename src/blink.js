import React from 'react';
import ReactDOM from 'react-dom';

export default class Blink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: this.props.width,
            left: this.props.left,
            top: this.props.top,
            children: [],
            isNew: true,
            keyNum: this.props.keyNum,
        }
        this.leftClick = this.leftClick.bind(this);
        this.rightClick = this.rightClick.bind(this);
        this.state.keyNum.plus()
        this.keyStr = this.state.keyNum.number().toString()
    }
    componentDidMount() {
        
        this.parentId = document.getElementById(this.keyStr).parentNode.id;
        if (this.parentId === "") {
            this.parentId = "bigguy"
        }
    }

    leftClick(isNew) {
        if (isNew){
            this.setState(state => {
                const children = state.children.concat(
                    <Blink 
                        width={state.width}
                        top={30}
                        key={this.keyStr}
                        keyNum={state.keyNum}
                    />
                );
                return {
                    children,
                    isNew: false,
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
            const parent = document.getElementById(this.parentId);
            ReactDOM.createPortal( 
                document.getElementById(this.keyStr), parent)
            this.setState(state => {
                const newWidth = state.width / 2;
                return {
                    width:newWidth
                };
            });
            e.stopPropagation();
        }
    }
      
    render() {
        return (
            <div
                id={this.keyStr}
                style={{
                    border:"5px solid black",
                    backgroundColor:"white",
                    height:"30vh",
                    top:"30vh",
                    width:this.state.width + "%",
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