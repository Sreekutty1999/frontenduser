import React from 'react';

const Input = ({ id, name, value, onChange, type = 'text', placeholder, required = false }) => (
  <div style={{ marginBottom: '15px' }}>
    <label htmlFor={id} style={{ display: 'block', fontSize: '14px', color: '#555', marginBottom: '5px' }}>
      {placeholder}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      style={{
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#dcdcdc',
        color: '#000',
      }}
    />
  </div>
);

export default Input;
