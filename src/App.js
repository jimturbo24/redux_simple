import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodo } from './actions/todoActions';
// import './components/redux'

class App extends Component {
  componentWillMount() {
    this.props.dispatch({type: 'THIS_BETTER_WORK', payload: 'Go to the store'})
    this.props.dispatch(getTodo())
  }

  render() {
    return (
      <div className="App">
        <h2>Redux Training Is Fun</h2>
        <span>{this.props.todo}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps)(App)
