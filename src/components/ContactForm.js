import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // State per gestire il form inviato

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Controlla se tutti i campi sono compilati
    if (!formData.name || !formData.email || !formData.message) {
      alert('Per favore, compila tutti i campi prima di inviare il form.');
      return;
    }

    // Configura i dati per l'invio tramite EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Sostituisci queste stringhe con i tuoi valori dal pannello di controllo di EmailJS
    const serviceID = 'service_tixgb75';
    const templateID = 'template_l5t6i7i';
    const userID = 'tXjof4-r_lFhCTIR-';

    // Invia il form tramite EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log('Form inviato con successo!', response);
        setFormSubmitted(true); // Imposta il form come inviato con successo
      },
      (error) => {
        console.error('Errore nell\'invio del form:', error);
        // Aggiungi qui il codice per gestire un messaggio di errore
      }
    );
  };

  return (
    <div className="form-container">
      <div className="informazioni-personali">
        <p>Nome: Vincenzo Busalacchi</p>
        <p>Numero di telefono: +39 3519792793</p>
        <p>Email: vincibusa@gmail.com</p>
      </div>
      <form onSubmit={handleSubmit}>
        {formSubmitted && (
          <div className="alert alert-success" role="alert">
            Il form è stato inviato con successo!
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nome Cognome</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Richiesta</label>
          <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Invia</button>
      </form>
    </div>
  );
};

export default ContactForm;
