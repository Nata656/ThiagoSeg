import { Link } from 'react-router-dom'
import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaWhatsapp,
} from 'react-icons/fa'
import Logo from './Logo'
import { services } from '../data/services'
import { site, whatsappLink } from '../data/site'
import './Footer.css'

const socials = [
  { key: 'facebook', label: 'Facebook', Icon: FaFacebookF },
  { key: 'instagram', label: 'Instagram', Icon: FaInstagram },
  { key: 'linkedin', label: 'LinkedIn', Icon: FaLinkedinIn },
  { key: 'google', label: 'Google', Icon: FaGoogle },
]

const usefulLinks = [
  {
    label: 'Normas Regulamentadoras (NR)',
    href: 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes',
  },
  { label: 'Portal do eSocial', href: 'https://www.gov.br/esocial/pt-br' },
  { label: 'Documentação Técnica – eSocial', href: 'https://www.gov.br/esocial/pt-br/documentacao-tecnica' },
]

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__brand">
          <Link to="/" className="footer__logo" aria-label={`${site.name} – página inicial`}>
            <Logo showTagline />
          </Link>
          <ul className="footer__social">
            {socials.map(({ key, label, Icon }) => (
              <li key={key}>
                <a href={site.social[key]} aria-label={label} target="_blank" rel="noreferrer">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__cols">
        <div>
          <h3 className="footer__title">Negócios</h3>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/quem-somos">Quem Somos</Link></li>
            <li><Link to="/gestao-integrada">Gestão Integrada</Link></li>
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/servicos/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer__title">Links Úteis</h3>
          <ul className="footer__links">
            {usefulLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__title">Endereço</h3>
          <ul className="footer__contact">
            <li><FaMapMarkerAlt /> <span>{site.address}</span></li>
            <li>
              <FaEnvelope /> <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <FaWhatsapp /> <a href={whatsappLink} target="_blank" rel="noreferrer">{site.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          Copyright © {year} {site.name} – Consultoria em SST. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
