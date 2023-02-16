import PropTypes from 'prop-types';
import React from 'react';

function List({ messages }) {
  return (
    <ul className="messages-list">
      {messages.map((message) => (
        <li key={ message.id }>
          <p className="message-title">
            {message.title}
          </p>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
};

export default List;