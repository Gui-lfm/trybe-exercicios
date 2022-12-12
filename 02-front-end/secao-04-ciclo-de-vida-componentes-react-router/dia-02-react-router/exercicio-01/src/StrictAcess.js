import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StricAcess extends Component {
  render() {
    const {
      user: { username, password },
    } = this.props;
    if (!(username === 'joao' && password === '1234')) {
      alert('acess denied');
      return <Redirect to="/" />;
    }
    return <p>Wellcome João!</p>;
  }
}

export default StricAcess;
