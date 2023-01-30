import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharacterCard from './components/CharacterCard';
import { fetchAPI } from './redux/actions';

class App extends Component {
  state = {
    nameSearch: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { nameSearch } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchAPI(nameSearch));
    this.setState({ nameSearch: '' });
  };

  render() {
    return (
      <>
        <h1>Game of Thunks</h1>
        <p>Procure informações do seu personagem favorito de Game of Thrones</p>
        <form>
          <input type="text" name="nameSearch" onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>
            Procurar personagem
          </button>
        </form>
        <CharacterCard/>
      </>
    );
  }
}

export default connect()(App);
