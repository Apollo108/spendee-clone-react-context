import React from 'react';
import ReactDOM from 'react-dom';
console.log('serega js');

export class Output extends React.Component{
    render(){
        return(
            <div className="output">
                <div><span>Current Wallet Balance</span><br/><span> $ 100 </span></div>
                <div><span>Total Period Change</span><br/><span> $100 </span></div>
                <div><span>Total Period Expenses</span><br/><span> - $100 </span></div>
                <div><span>Total Period Income</span><br/><span> + $100 </span></div>
            </div>
        );
    }
}

export class CategoryEditor extends React.Component {

    render(){
        return(
            <div className="cat-editor  ">
                <input type="text" placeholder="color"/>
                <input type="text" placeholder="Category name"/>
                <select>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
                <button>Save Category</button>
            </div>
        );
    }
}

export class CategoryList extends  React.Component {
    render(){
        return (
          <div className="cat-list">
              <span>Name of cat</span>
              <button>Edit</button>
              <button>Delete</button>
          </div>
        );
    }
}