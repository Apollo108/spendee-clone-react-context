import React from 'react';
import ReactDOM from 'react-dom';

export class Output extends React.Component{
    render(){
        return(
            <div className="output">
                <div>
                    <p>{this.props.label}</p>
                    <p>{this.props.sum}</p>
                </div>
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