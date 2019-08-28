import React from 'react';

export default class Blink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            children: this.props.children,
            width:this.props.width,
            left: this.props.left,
            isNew: true,
        }
        if (this.state.children[0] != null) {
            this.state.isNew = false;
            this.properChildren = [];
            var newLeft = 0 - (100 / this.state.children.length);
            var newWidth = 100 / this.state.children.length;
            for (var i = 0; i < this.state.children.length; i++) {
                newLeft += 100 / this.state.children.length;
                this.properChildren = this.properChildren.concat(
                    <Blink children={this.state.children[i].children} width={newWidth} left={newLeft} />
                )
            }

        }
        
    }

    leftClick(isNew) {
    }

    rightClick(e) {
        if (e.nativeEvent.which === 3) {
            e.preventDefault()
        }
    }
      
    render() {
        return (
            <div
                id={this.keyStr}
                style={{
                    border:"5px solid black",
                    backgroundColor:"white",
                    position:"absolute",
                    width:this.state.width + "%",
                    height:"30vh",
                    top:"30vh",
                    left:this.state.left + "%"
                }}
                onClick={ () => { this.leftClick(this.state.isNew) }}
                onContextMenu={this.rightClick}
            >
                { this.properChildren }
            </div>
        )   
    }
}