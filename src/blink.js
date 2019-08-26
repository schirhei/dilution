import React from 'react';

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
                        width={state.width}
                        top={30}
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
                const newWidth = this.state.width / 2;
                const newTop = this.state.width / 2;
                const children = state.children.concat(
                    <Blink 
                        width={newWidth}
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
                    border:"5px solid black",
                    backgroundColor:"white",
                    width: this.state.width + "vw", 
                    height:"30vh",
                    top:this.state.top + "vh",
                    left:"0",
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