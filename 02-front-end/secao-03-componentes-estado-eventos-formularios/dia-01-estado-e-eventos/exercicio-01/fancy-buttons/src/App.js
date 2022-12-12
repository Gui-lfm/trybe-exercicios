import React, { Component } from 'react';

class App extends Component {
  state = {
    btnUm: 0,
    btnDois: 0,
    btnTres: 0,
  };

  btnClickOne = () => {
    this.setState((prevState) => ({
      btnUm: prevState.btnUm + 1,
    }));
  };

  btnClickTwo = () => {
    this.setState((prevState) => ({
      btnDois: prevState.btnDois + 1,
    }));
  };

  btnClickThree = () => {
    this.setState((prevState) => ({
      btnTres: prevState.btnTres + 1,
    }));
  };

  render() {
    const { btnUm, btnDois, btnTres } = this.state;
    return (
      <>
        <button type="button" onClick={this.btnClickOne}>
          {btnUm}
        </button>
        <button type="button" onClick={this.btnClickTwo}>
          {btnDois}
        </button>
        <button type="button" onClick={this.btnClickThree}>
          {btnTres}
        </button>
      </>
    );
  }
}
export default App;
