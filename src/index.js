import React from 'react';
import ReactDOM from 'react-dom';
import {CategoryEditor, CategoryList, Output} from './category.js';
import './list.js';
import './index.css';

class App extends React.Component {
    render(){
        return(
            <div>
                <Output label="Current Wallet Balance" sum={200}/>
                <Output label="Total Period Change" sum={200}/>
                <Output label="Total Period Expenses" sum={-200}/>
                <Output label="Total Period Income" sum={+200}/>
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
