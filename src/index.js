import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Todo(props) {
  return(
    <label>
      <input type="checkbox" checked={props.isDone} onChange={props.handleClick}></input>
      {props.value}
    </label>
  );
}

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: [[1,"go to the rooftop of a high building", true], 
            [2,"jump", false],
            [3,"pose like superman", false]],
    };
  }

  handleClick(huh){
    huh[2] = "qwe";
    const { checked } = huh.target;
    this.setState({ checked });
  }

  renderTodo(todo){
    return(
      <Todo
        value = {todo[1]}
        isDone = {todo[2]}
        onclick = {(huh) => this.handleClick(huh) }
      />
    );
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.list.map(todo => (
            <li key={todo[0]}>{this.renderTodo(todo)}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
