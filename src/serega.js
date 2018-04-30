import React from 'react';
import ReactDOM from 'react-dom';
console.log('serega js');


export class Output extends React.Component{
    render(){
        return(
            <div>
                <div><span>Current Wallet Balance</span><span> $ 100 </span></div>
                <div><span>Total Period Change</span><span> $100 </span></div>
                <div><span>Total Period Expenses</span><span> - $100 </span></div>
                <div><span>Total Period Income</span><span> + $100 </span></div>
            </div>
        );
    }
}

export class CategoryEditor extends React.Component {

    render(){
        return(
            <div>
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
          <div>
              <span>Name of cat</span>
              <button>Edit</button>
              <button>Delete</button>
          </div>
        );
    }
}