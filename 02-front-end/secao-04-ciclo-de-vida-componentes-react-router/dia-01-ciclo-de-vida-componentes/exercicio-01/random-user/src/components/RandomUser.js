import React, { Component } from 'react';
import Loading from './Loading';
import UserInfo from './UserInfo';

class Randomuser extends Component {
  state = {
    user: [],
    loading: true,
  };

  fetchApi = () => {
    fetch('https://api.randomuser.me/ ')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          user: data.results,
          loading: false,
        })
      );
  };

  componentDidMount() {
    this.fetchApi();
  }

  userRequiredInfo = (user) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.date,
      image: user.picture.large,
    };
  };

  render() {
    const { loading, user } = this.state;
    return loading ? (
      <Loading />
    ) : (
      <UserInfo user={this.userRequiredInfo(user[0])} />
    );
  }
}

export default Randomuser;
