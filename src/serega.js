import React from 'react';
import ReactDOM from 'react-dom';
console.log('serega js');

export default class CategoryEditor extends React.Component {

    render(){
        return(
            <div>
                <input type="text" placeholder="color"/>
                <input type="text" placeholder="Category name"/>
                <select>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
                <button>Approve</button>
            </div>
        );
    }
}

export default class CategoryList extends  React.Component {
    render(){
        return (
          <div>
              <span>Name of cat</span>
              <button>Edit</button>
              <button>Delete</button>
          </div>
        );
    }
}