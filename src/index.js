import React from 'react';
import ReactDOM from 'react-dom';
import Mother from './mother.js'

/*var template = [
    {
        "text":"i am a parent",
        "children":[
            1,
            2
        ]
    },
    {
        "text":"piano",
        "children":[
            3,
            4
        ]
    },
    {
        "text":"saxophone",
        "children":[

        ]
    },
    {
        "text":"guy yelling",
        "children":[

        ]
    },
    {
        "text":"audience",
        "children":[

        ]
    }
]*/

ReactDOM.render(
    <Mother />,
    document.getElementById('root')
);