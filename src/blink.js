import React from 'react';

export default class Blink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: this.props.height,
            left: this.props.left,
            top: this.props.top,
            children: [],
            isNew: true,
            keyNum: this.props.keyNum,
            parentClick: this.props.parentClick
        }
        this.leftClick = this.leftClick.bind(this);
        this.state.parentClick = this.state.parentClick.bind(this);
    }

    leftClick(isNew) {
        if (isNew){
            this.setState(state => {
                const newKey = state.keyNum + 1;
                const children = state.children.concat(
                    <Blink 
                        backgroundColor={'#'+Math.random().toString(16).substr(-6)} 
                        height={state.height}
                        top={state.top}
                        left={30}
                        key={newKey}
                        keyNum={newKey}
                        parentClick={this.rightClick}
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
            this.setState(state => {
                const newKey = this.state.keyNum + 1;
                const newHeight = this.state.height / 2;
                const newTop = this.state.height / 2;
                const children = state.children.concat(
                    <Blink 
                        backgroundColor={'#'+Math.random().toString(16).substr(-6)} 
                        height={newHeight}
                        top={newTop}
                        left={30}
                        key={newKey}
                        keyNum={newKey}
                        parentClick={this.state.parentClick}
                    />
                );
                return {
                    children
                };
            })
        }
    }
      
    render() {
        return (
            <div 
                id={this.state.keyNum.toString()}
                style={{
                    backgroundColor:'#'+Math.random().toString(16).substr(-6),
                    width: "30vw",
                    height:this.state.height + "%",
                    top:this.state.top + "%",
                    left:this.state.left + "vw",
                    position:"absolute"
                }}
                onClick={ () => { this.leftClick(this.state.isNew) }}
                onContextMenu={this.state.parentClick}
            >
                { this.state.children }
            </div>
        )   
    }
}