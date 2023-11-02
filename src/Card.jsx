import React from 'react';

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    marginTop: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    backgroundColor: '#f8f9fa',
  },
  container: {
    padding: '2px 16px',
  },
  title: {
    color: 'black',
  },
  text: {
    fontSize: '1.5em',
    color: 'black',
  },
};

function Card({ input1, input2 }) {
  return (
    <div style={styles.card}>
      <div style={styles.container}>
        <h2 style={styles.title}>Datos del auto:</h2>
        <p style={styles.text}>Marca: {input1}</p>
        <p style={styles.text}>Modelo: {input2}</p>
      </div>
    </div>
  );
}

export default Card;
