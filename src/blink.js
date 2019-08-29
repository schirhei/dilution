import React from 'react';

export default class Blink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            peers:         this.props.peers,
            renderedPeers: [],
            k: this.props.k
        }
        this.leftClick    = this.leftClick.bind(this);
        this.rightClick   = this.rightClick.bind(this);
        this.loadPeers    = this.loadPeers.bind(this);
    }

    componentDidMount() {
        this.loadPeers();
    }

    

    loadPeers() {
        const peers = this.state.peers;
        if (peers != null) {
            var tempChildren  = [];
            var newTop        = 0 - (100 / peers.length);
            var newHeight     = (100 / peers.length) * 0.98;

            for (var i = 0; i < peers.length; i++) {
                newTop += 100 / peers.length;
                this.state.k.plus();

                tempChildren = tempChildren.concat(
                    <div
                        key={this.state.k.number()}
                        id={ i.toString() }
                        style={ this.getStyle(newHeight, newTop) }
                        onClick={ this.leftClick }
                        onContextMenu={ this.rightClick }>
                            
                        { peers[i].text }
                        { this.createChildren(peers[i].children) }

                    </div>
                );
            }

            this.setState({ renderedPeers:tempChildren })
        }
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    getStyle(height, top) {
        return {
            backgroundColor: this.getRandomColor(),
            position:        "absolute",
            height:          height + "%",
            top:             top + "%",
            width:           "33vw",
            left:            "33vw"
        }
    }

    createChildren(childs) {
        var blinkChild = [];

        if (childs[0] != null) {
            blinkChild = blinkChild.concat(
                <Blink 
                    peers={childs} 
                    k={this.state.k}
                    key={this.state.k.number()}
                />
            )
        }
        return blinkChild
    }

    leftClick(e) {
        const children = this.state.peers[e.target.id].children;
        if (children[0] == null) {
            children.pop();
            children.push({text:"", children:[null]});
            this.loadPeers();
        } else {
            console.log("todo: edit inside text");
        }

        e.stopPropagation();
    }

    rightClick(e) {
        if (e.nativeEvent.which === 3) {
            this.state.peers.push({text:"", children:[null]});
            this.loadPeers();

            e.preventDefault();
            e.stopPropagation();
        }
    }
      
    render() {
        return (
            <div>
                { this.state.renderedPeers }
            </div>
        )   
    }
}