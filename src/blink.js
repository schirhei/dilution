import React from 'react';

export default class Blink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            peers:         this.props.peers,
            width:            this.props.width,
            left:             this.props.left,
            properChildren:   [],
        }
        this.leftClick    = this.leftClick.bind(this);
        this.rightClick   = this.rightClick.bind(this);
        this.loadPeers = this.loadPeers.bind(this);
    }

    componentDidMount() {
        this.loadPeers();
    }

    loadPeers() {
        if (this.state.peers != null) {
            var tempChildren = [];
            var newLeft      = 0 - (100 / this.state.peers.length);
            var newWidth     = (100 / this.state.peers.length) * 0.98;
            for (var i = 0; i < this.state.peers.length; i++) {
                var blinkChild = []
                newLeft += 100 / this.state.peers.length;
                var childs = this.state.peers[i].children;
                if (childs[0] != null) {
                    blinkChild = blinkChild.concat(
                        <Blink 
                            peers={childs} 
                            width={100} 
                            left={0} 
                            />
                    )
                }
                tempChildren = tempChildren.concat(
                    <div
                        id={i.toString()}
                        style={{
                            border:          "5px solid black",
                            backgroundColor: "white",
                            position:        "absolute",
                            height:          "30vh",
                            top:             "30vh",
                            width:           newWidth + "%",
                            left:            newLeft + "%"
                        }}
                        onClick={  this.leftClick }
                        onContextMenu={ this.rightClick }
                    >
                            {blinkChild}
                    </div>
                );
                    
            }
            this.setState({properChildren:tempChildren})
        }
    }

    leftClick(e) {
        e.stopPropagation()
        const childs = this.state.peers[e.target.id].children
        if (childs[0] == null) {
            childs.pop();
            childs.push({text:"", children:[null]});
            this.loadPeers();
        } else {
            console.log("todo: edit inside text");
        }
    }

    rightClick(e) {
        if (e.nativeEvent.which === 3) {
            e.preventDefault();
            e.stopPropagation();
            this.state.peers.push({text:"", children:[null]});
            console.log(this.state.peers)
            this.loadPeers()
        }
    }
      
    render() {
        return (
            <div>
                { this.state.properChildren }
            </div>
        )   
    }
}