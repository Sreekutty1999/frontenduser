import React from 'react';

const Message = ({ message, type }) => (
  message && (
    <p style={{ color: type === 'success' ? 'green' : 'red', textAlign: 'center', marginBottom: '15px' }}>
      {message}
    </p>
  )
);

export default Message;
