import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    city: '',
    module: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form>
      <h1>Formulário da pessoa estudante</h1>
      <br />
      <input
        name="name"
        value={formData.name}
        type="text"
        placeholder="Digite o seu nome:"
        onChange={handleChange}
      />
      <br />
      <input
        name="age"
        value={formData.age}
        type="number"
        placeholder="idade"
        onChange={handleChange}
      />
      <br />
      <input
        name="city"
        value={formData.city}
        type="text"
        placeholder="cidade"
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="fund">
        <input
          type="radio"
          value="Fundamentos"
          checked={formData.module === 'Fundamentos'}
          onChange={handleChange}
          name="module"
          id="fund"
        />
        Fundamentos
      </label>

      <label htmlFor="front">
        <input
          type="radio"
          value="Front-end"
          checked={formData.module === 'Front-end'}
          onChange={handleChange}
          name="module"
          id="front"
        />
        Front-end
      </label>

      <label htmlFor="back">
        <input
          type="radio"
          value="Back-end"
          checked={formData.module === 'Back-end'}
          onChange={handleChange}
          name="module"
          id="back"
        />
        Back-end
      </label>

      <label htmlFor="cs">
        <input
          type="radio"
          value="Ciência da Computação"
          checked={formData.module === 'Ciência da Computação'}
          onChange={handleChange}
          name="module"
          id="cs"
        />
        Ciência da Computação
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
