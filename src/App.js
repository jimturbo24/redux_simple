import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './actions/todoActions';
// import './components/redux'

class App extends Component {
  componentWillMount() {
    // this.props.dispatch({type: 'THIS_BETTER_WORK', payload: 'Go to the store'})
    // this.props.dispatch(getTodo())
    this.props.dispatch(getTodos())
  }


  render() {
    console.log(Object.getOwnPropertyNames(this.props.todos).length);
    if(Object.getOwnPropertyNames(this.props.todos).length === 201){
      return (
        <div className="App">
          <h2>Redux Training Is Fun</h2>
          <span>{this.props.todos[2].title}</span>
        </div>
      );
    }
    return(
      <div>Loading...</div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App)
