import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './components/redux'

@connect((store) => {
  return{
    todos: store.todos
  };
})
export default class App extends Component {
  render() {
    return (
      <div className="App">
        Redux Training Is Fun
        console.log(this.props);
      </div>
    );
  }
}
