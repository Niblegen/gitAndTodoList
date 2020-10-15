import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Todo(props) {
  return(
    <label>
      <input type="checkbox">
      </input>
      {props.value}
    </label>
  );
}

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: [[1,"qwe"], [2,"qwer"], [3,"qwett"]],
    };
  }

  renderTodo(val){
    return(
      <Todo
        value = {val}
        isDone = {false}
      />
    );
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.list.map(item => (
            <li key={item[0]}>{this.renderTodo(item[1])}</li>
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
