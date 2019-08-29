import React from 'react';

export default class Blink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            children:         this.props.children,
            width:            this.props.width,
            left:             this.props.left,
            properChildren:   [],
            parentRightClick: this.props.rightClick
        }
        this.leftClick    = this.leftClick.bind(this);
        this.rightClick   = this.rightClick.bind(this);
        this.loadChildren = this.loadChildren.bind(this);
    }

    componentDidMount() {
        this.loadChildren();
    }

    loadChildren() {
        let childs = this.state.children;
        if (childs[0] != null) {
            var tempChildren = [];
            var newLeft      = 0 - (100 / childs.length);
            var newWidth     = (100 / childs.length) * 0.98;

            for (var i = 0; i < childs.length; i++) {
                newLeft += 100 / childs.length;
                tempChildren = tempChildren.concat(
                    <Blink 
                        children={childs[i].children} 
                        width={newWidth} 
                        left={newLeft} 
                        updateTemplate={this.props.updateTemplate} 
                        rightClick={this.rightClick}
                    />
                );
            }

            this.setState({properChildren: tempChildren});
        }
    }

    leftClick() {
        if (this.state.children[0] == null) {
            this.state.children.pop();
            this.state.children.push({text:"", children:[null]});
            this.loadChildren();
        } else {
            console.log("todo: edit inside text");
        }
    }

    rightClick(e) {
        if (e.nativeEvent.which === 3) {
            e.preventDefault();
            e.stopPropagation();
            this.state.children.push({text:"", children:[null]});
            var newWidth = this.state.width / 2
            this.setState({width:newWidth})
            this.props.updateTemplate(this.props.children);
            this.loadChildren()
            /*
            console.log(this.state.children)
            this.setState ( state => {
                const children = state.children.concat(

                )
             } )
            this.state.children.push({text:"NEW GUY!!", children:[null]})*/
        }
    }
      
    render() {
        return (
            <div
                id={ this.keyStr }
                style={{
                    border:          "5px solid black",
                    backgroundColor: "white",
                    position:        "absolute",
                    height:          "30vh",
                    top:             "30vh",
                    width:           this.state.width + "%",
                    left:            this.state.left + "%"
                }}
                onClick={ this.leftClick }
                onContextMenu={ this.state.parentRightClick }
            >
                { this.state.properChildren }
            </div>
        )   
    }
}