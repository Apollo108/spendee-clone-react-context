import React from 'react';
import ReactDOM from 'react-dom';
import CategoryEditor from './serega.js';
import './sasha.js';
import './index.css';

class App extends React.Component {
    render(){
        return(
            <div>Hello world!
                <CategoryEditor />
            </div>

        );
    }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
