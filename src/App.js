import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './actions/todoActions';
import TodoList from './components/todo_list'
import './App.css'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(getTodos())
  }

  render() {
    console.log(Object.getOwnPropertyNames(this.props.todos).length);
    console.log(this.props.todos);

    return(
      <div className="App">
        <h2>Redux Training Is Fun</h2>

        <TodoList
          todos={this.props.todos}
          handleDelete={this.doDelete.bind(this)}/>
      </div>
    );
  }

  doDelete(id) {
    this.props.dispatch({ type: "DELETE", todoId: id })
  }

}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App)
