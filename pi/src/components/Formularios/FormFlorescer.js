import React, { useState } from 'react';
import './Form.css'; // Importe o arquivo CSS para aplicar os estilos
import floreForm from './floreForm.webp'

function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    aboutYou: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://fernandodb.azurewebsites.net/api/voluntario', { // Atualize esta URL para a URL da sua API .NET
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then((response) => response.text())
    .then((data) => console.log(data));
};


  return (
    <>
    <div className="formularios">
      <div className="additional-text">
      <h2>Como ajudar a CASA FLORESCER?</h2>
        A Casa Florescer promove vários eventos, cursos e workshops para as pessoas acolhidas. Por isso, eles estão sempre precisando de novos talentos. Qual é o seu? Um instrumento musical, culinária, informática, talvez um segundo idioma? Que tal contribuir com as suas habilidades para a Casa Florescer? Você pode utilizar o formulário ao lado para disponibilizar seus dados de contato (não se preocupe, seus dados serão divulgados apenas para a ONG). No campo "Fale de Você", fale sobre alguma habilidade útil que você possua e gostaria de ensinar para ajudar na causa.
        <img src={floreForm} alt="Flore Form" />
      </div>
      <div className="form-container">
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <label>
              Nome completo:
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Telefone (com DDD e apenas números):
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Fale de você:
              <textarea
                name="aboutYou"
                value={formData.aboutYou}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}

export default Form;