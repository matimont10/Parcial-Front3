import React, { useState } from 'react';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vh', 
  },
  input: {
    margin: '10px 0',
    padding: '5px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
};

function Form({ onSubmit }) {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input1.trim().length < 3 || input1.trim()[0] === ' ' || input2.length < 6) {
      setError('Por favor, chequea que la información sea correcta.');
    } else {
      setError('');
      onSubmit({ input1, input2 });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label>Ingrese la marca</label>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        style={styles.input}
      />
      <label>Ingrese el modelo</label>
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Enviar</button>
      {error && <p style={styles.error}>{error}</p>}
    </form>
  );
}

export default Form;
