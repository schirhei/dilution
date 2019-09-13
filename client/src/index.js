import React from 'react';
import ReactDOM from 'react-dom';
import Mother from './mother.js';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter>
        <Route path='/board/:id' component={Mother}/>
    </BrowserRouter>,
    document.getElementById('root')
);