import { FaWhatsapp } from 'react-icons/fa'
import { site, whatsappLink } from '../data/site'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      className="whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label={`Falar no WhatsApp: ${site.phone}`}
    >
      <span className="whatsapp__bubble">
        <span className="whatsapp__greeting">{site.whatsappGreeting}</span>
        <strong>{site.phone}</strong>
      </span>
      <span className="whatsapp__icon">
        <FaWhatsapp />
      </span>
    </a>
  )
}
