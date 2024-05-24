import React, { useState } from 'react';
import aroucheForm from '../Formularios/aroucheForm.webp'

function Formulario() {
  const [formData, setFormData] = useState({
    fullNameFormulario: '',
    phoneFormulario: '',
    emailFormulario: '',
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
          <h2>Como ajudar o Quentinhas do Arouche?</h2>
          O quentinhas do Arouche se reúne todos os domingos de manhã no Largo do Arouche, região central de São Paulo. O projeto possui uma página na plataforma apoia-se (https://apoia.se/quentinhasdoarouche), mas você também pode contribuir com o valor que desejar para a chave pix quentinhasdoarouche@gmail.com (a transferência irá para o nome de Cassiano Lima Nery Ferreira Braga, coordenador do projeto). Se quiser saber mais sobre os encontros semanais do projeto, é só preencher o formulário ao lado (não se preocupe, seus dados serão divulgados apenas para a ONG).
          <img src={aroucheForm} alt="Flore Form" />
        </div>
        <div className="form-container">
          <div className="form-content">
            <form onSubmit={handleSubmit}>
              <label>
                Nome completo:
                <input
                  type="text"
                  name="fullNameFormulario"
                  value={formData.fullNameFormulario}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Telefone (com DDD e apenas números):
                <input
                  type="tel"
                  name="phoneFormulario"
                  value={formData.phoneFormulario}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="emailFormulario"
                  value={formData.emailFormulario}
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

export default Formulario;