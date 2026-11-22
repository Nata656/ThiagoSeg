import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import PageBanner from '../components/PageBanner'
import { site, whatsappLink } from '../data/site'

export default function Contato() {
  const [sent, setSent] = useState(false)

  // Ainda sem envio real: o formulário será ligado a um serviço de e-mail
  // (ex.: EmailJS, Formspree ou backend próprio) quando a hospedagem for definida.
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <>
      <PageBanner
        image={null /* ex.: 'images/contato.jpg' */}
        title="Atendimento."
        text={`Atendemos em todo o território nacional – tel.: ${site.phone}, e-mail: ${site.email}.`}
      />

      <section className="section">
        <div className="container contact">
          <div>
            <h2>Formulário de e-mail</h2>
            <div className="contact__box">
              <form className="form" onSubmit={handleSubmit}>
                <input name="nome" placeholder="Seu nome*" required aria-label="Seu nome" />
                <input name="email" type="email" placeholder="Seu e-mail*" required aria-label="Seu e-mail" />
                <input name="telefone" type="tel" placeholder="Telefone / WhatsApp" aria-label="Telefone" />
                <input name="assunto" placeholder="Assunto" aria-label="Assunto" />
                <textarea name="mensagem" placeholder="Sua mensagem*" required aria-label="Mensagem" />
                <button type="submit" className="btn">Enviar</button>
                {sent && (
                  <p className="form__note" role="status">
                    Mensagem recebida! (Envio real será ativado na publicação do site.)
                  </p>
                )}
              </form>
              {/* Mapa do Google gerado a partir do endereço em src/data/site.js */}
              <div className="map map--live">
                <iframe
                  title={`Mapa – ${site.address}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&z=15&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="contact__info">
            <h2>Entre em Contato</h2>
            <h3>Endereço</h3>
            <ul>
              <li><FaMapMarkerAlt /> <span>{site.address}</span></li>
              <li><FaEnvelope /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li>
                <FaWhatsapp /> <a href={whatsappLink} target="_blank" rel="noreferrer">{site.phone} – WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
