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