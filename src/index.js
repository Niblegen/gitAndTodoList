import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TodoList extends React.Component{
  
}

class ListSection extends React.Component {
  render() {
    return (
      <div className="ListSection">
        <div className="TodoList">
          <h1>qwe</h1>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <ListSection />,
  document.getElementById('root')
);
