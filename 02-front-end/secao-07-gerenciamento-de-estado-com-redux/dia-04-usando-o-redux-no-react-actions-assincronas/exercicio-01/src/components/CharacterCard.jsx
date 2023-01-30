import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterCard extends Component {
  render(){
    const {isLoading, character} = this.props;
    if(isLoading) return <div>carregando...</div>
    if(!isLoading && character) return (
    <section>
      
      <h3>{character.name}</h3>
      <p>{`Gender: ${character.gender}`}</p>
      {character.culture && <p>{`Culture: ${character.culture}`}</p>}
      <p>{`Born: ${character.born}`}</p>
      {character.died && <p>{`Died ${character.died}`}</p>}
      {character.titles && 
      <>
      <h4>Titles:</h4>
      <ul> {character.titles.map((title) => <li>{title}</li>
      )}</ul>
      </>
      }
      {character.aliases && 
      <>
      <h4>Also know as:</h4>
      <ul> {character.aliases.map((alias) => <li>{alias}</li>
      )}</ul>
      </>
      }
    </section>
    )
    if(!isLoading && !character) return (
    <div>OPS, tente digitar o nome do personagem inteiro</div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  character: state.character,
})

export default connect(mapStateToProps)(CharacterCard);