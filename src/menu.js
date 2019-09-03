import React from 'react';

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            template: this.props.template,
            password: this.props.password,
            menuBox: [ (<input key="inputtingpassword" type="text" name="passwordBox"
                            id="passwordBox" placeholder="Enter password" onKeyDown={this.checkPassword}/>)
                             ]
        }

        this.export = this.export.bind(this);
        this.import = this.import.bind(this);
        this.changeTemplate = this.changeTemplate.bind(this);
    }
    
    // binding in constructor doesnt work but this notation does
    checkPassword = (e) => {
        e.stopPropagation();
        const enterKey = 13;
        if (e.keyCode === enterKey) {
            if (this.state.password === e.target.value) {
                console.log("success");
                this.setState({
                menuBox: [ <button key="save" onClick={this.save}>Save</button>, 
                           <input key="impprt" id="import" type="file" accept=".txt" onChange={this.import}/>
                         ]
                })
            }
        }        
    }

    save(e) {
        e.stopPropagation();
        console.log("save")
    }

    
    export(e) {
        e.stopPropagation();
        console.log(this.props.template);
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.state.template)));
        element.setAttribute('download', "export.txt");

        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }


    changeTemplate(newTemplate) {
        this.state.template.pop()
        this.state.template.push(newTemplate[0])
        this.props.update()
    }

    import(e) {
        e.stopPropagation();
        // in addEventListener, "this" as a keyword is messed up so we need to take it out
        var changeTemplate = this.changeTemplate;
        var templateFile = document.getElementById("import").files[0];
        if( templateFile.type.startsWith("text/")) {
            const read = new FileReader();
            
            read.addEventListener('loadend', function (e) {
                var temp;
                temp = e.target.result;
                try {
                    var jsonTemp = JSON.parse(temp);
                    changeTemplate(jsonTemp)
                } catch {
                    alert("Invalid file.");
                }
            });
            read.readAsText(templateFile);
        }
    }


    render() {
        return (
            <div 
                id="menu"
                key={6465465454}
                style={{ position:"fixed",
                         top:"0", 
                         right:"0",
                         textAlign:"right"}}>
                    {this.state.menuBox}
                    <button 
                        key="export" 
                        style={{ bottom:"0", 
                                 right:"0", 
                                 position:"fixed"}}
                        onClick={this.export}
                    >
                        Export
                    </button>
                </div>
        )
    }
}
