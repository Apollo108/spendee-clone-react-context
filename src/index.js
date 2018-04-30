import React from 'react';
import ReactDOM from 'react-dom';
import {CategoryEditor, CategoryList} from './serega.js';
import './sasha.js';
import './index.css';

class App extends React.Component {
    render(){
        return(
            <div>Hello world!
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
