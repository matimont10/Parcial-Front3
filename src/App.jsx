import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
};

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App" style={styles.app}>
      <h1>Registro automotor</h1>
      <h3>Ingrese los datos solicitados del vehiculo</h3>
      <Form onSubmit={handleFormSubmit} />
      {formData && <Card input1={formData.input1} input2={formData.input2} />}
    </div>
  );
}

export default App;
