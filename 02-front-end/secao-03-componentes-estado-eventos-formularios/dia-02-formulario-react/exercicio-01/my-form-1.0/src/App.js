import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      data: '',
      comentario: '',
      selected: '',
      checked: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { nome, data, comentario, selected, checked } = this.state;

    return (
      <form>
        <h1>Dados da Viagem</h1>

        <fieldset>
          <legend>Informações do usuário</legend>
          <label htmlFor="nome">Nome completo:</label>
          <input
            id="nome"
            type="text"
            name="nome"
            value={nome}
            onChange={this.handleChange}
          />
          <label htmlFor="data">Data de nascimento:</label>
          <input
            id="data"
            type="date"
            name="data"
            value={data}
            onChange={this.handleChange}
          />
          <label htmlFor="arquivo">
            Insira uma cópia de documento com foto:
          </label>
          <input type="file" name="arquivo" />
        </fieldset>

        <label htmlFor="checked">
          <input
            id="checked"
            name="checked"
            type="checkbox"
            value={checked}
            onChange={this.handleChange}
          ></input>
          Atesto que todas as informações pessoais são verdadeiras
        </label>

        <fieldset>
          <legend>Roteiro da viagem</legend>
          <label htmlFor="selected">Selecione o roteiro turístico:</label>
          <select
            id="selected"
            name="selected"
            value={selected}
            onChange={this.handleChange}
          >
            <option>Opção 1</option>
            <option>Opção 2</option>
          </select>
          <label htmlFor="comentario">
            Gostaria de adicionar alguma sugestão ao roteiro?
          </label>
          <textarea
            id="comentario"
            name="comentario"
            value={comentario}
            onChange={this.handleChange}
          ></textarea>
        </fieldset>
      </form>
    );
  }
}

export default App;
