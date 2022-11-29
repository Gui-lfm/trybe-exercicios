import React, { Component } from 'react';

function btnClick(message) {
  console.log(message);
}

class App extends Component {
  render() {
    return (
      <>
        <button onClick={btnClick('clicou botão 1')}>Botão 1</button>
        <button onClick={btnClick('clicou botão 2')}>Botão 2</button>
        <button onClick={btnClick('clicou botão 3')}>Botão 3</button>
      </>
    );
  }
}

export default App;
