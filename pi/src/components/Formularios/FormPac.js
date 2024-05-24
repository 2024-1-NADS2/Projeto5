import React, { useState } from 'react';
import pacForm from '../Formularios/pacForm.jpg';

function TerceiroFormulario() {
  const [formData, setFormData] = useState({
    fullNameTerceiro: '',
    phoneTerceiro: '',
    emailTerceiro: '',
    aboutYouTerceiro: '',
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
          <h2>Como ajudar PAC?</h2>
          O PAC também promove muitos eventos e workshops para as crianças acolhidas, por isso também sempre estão procurando talentos diversos. A ONG possui um site muito completo onde você ver mais fotos sobre o projeto e conhecer mais sobre seus idealizadores (https://www.projetopac.org.br/). Para saber como se voluntariar, você também pode preencher o formulário ao lado (não se preocupe, seus dados serão divulgados apenas para a ONG).
          <img src={pacForm} alt="Flore Form" />
        </div>
        <div className="form-container">
          <div className="form-content">
            <form onSubmit={handleSubmit}>
              <label>
                Nome completo:
                <input
                  type="text"
                  name="fullNameTerceiro"
                  value={formData.fullNameTerceiro}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Telefone (com DDD e apenas números):
                <input
                  type="tel"
                  name="phoneTerceiro"
                  value={formData.phoneTerceiro}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="emailTerceiro"
                  value={formData.emailTerceiro}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Fale de você:
                <textarea
                  name="aboutYouTerceiro"
                  value={formData.aboutYouTerceiro}
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

export default TerceiroFormulario;