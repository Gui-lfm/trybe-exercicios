import React from 'react';
import { connect } from 'react-redux';
import { actionCreator, clickCounter } from './redux/actions';

class App extends React.Component {
  render() {
    const { countState, dispatch, clickState } = this.props;
    return (
      <div>
        <h1>Contador</h1>
        <h2>{countState}</h2>
        <button
          onClick={() => {
            dispatch(actionCreator());
            dispatch(clickCounter());
          }}
        >
          Incrementa 1
        </button>
        <button
          onClick={() => {
            dispatch(actionCreator(5));
            dispatch(clickCounter());
          }}
        >
          Incrementa 5
        </button>
        <h3>{`numero de cliques: ${clickState}`}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clickState: state.counterReducer.clicks,
});

export default connect(mapStateToProps)(App);
