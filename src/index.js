import React from 'react';
import ReactDOM from 'react-dom';
import {CategoryEditor, CategoryList, Output} from './serega.js';
import './sasha.js';
import './index.css';

class App extends React.Component {
    render(){
        return(
            <div>
                <Output/>
                <CategoryEditor />
                <CategoryList />
            </div>

        );
    }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
