import React from 'react';

export default class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            renderItems: [this.props.text],
            boxStyle: {},
            changeText: this.props.changeText,
            id: this.props.id,
            children: this.props.children
        }

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.editText = this.editText.bind(this);
        this.getStyle = this.getStyle.bind(this);
    }

    componentDidMount() {
        this.setState({boxStyle:this.getStyle()})
    }

    handleKeyDown(e) {
        const enterKey = 13;
        if (e.keyCode === enterKey) {
            this.state.changeText(e.target.value, this.state.id)
            this.setState({
                text: e.target.value,
                renderItems: [e.target.value],
                boxStyle: this.getStyle()
            })
        }
    }

    editText(e) {
        e.stopPropagation();
        this.setState({
            renderItems:[<input 
                            key={28139123890823}
                            autoFocus
                            type="text"
                            onKeyDown={this.handleKeyDown}
                            name="textBox"
                            id="textBox"
                            defaultValue={this.state.text} />]
                        })
    }

    getStyle() {
        var style = {}
        if (this.state.children[0] != null){
            style["width"] = "100%";
            style["height"] = "100%";
        }
        return style
    }

    render() {
        return (
            <div
                style={ this.state.boxStyle }
                onClick={ this.editText }
            >{ this.state.renderItems }</div>
        )
    }
}