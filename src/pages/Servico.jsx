import { Link, useParams } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import PageBanner from '../components/PageBanner'
import ServiceIcon from '../components/ServiceIcon'
import { getService, services } from '../data/services'
import NotFound from './NotFound'

// Uma única página que serve para todos os serviços.
// O conteúdo de cada um fica em src/data/services.js
export default function Servico() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) return <NotFound />

  const others = services.filter((s) => s.slug !== slug)

  return (
    <>
      <PageBanner image={service.image} title={`${service.title}.`} text={service.bannerText} />

      <section className="section">
        <div className="container split">
          <div>
            <span className="accent-bar" />
            <h2>{service.title}</h2>
            <p>{service.intro}</p>
            <Link to="/contato" className="btn">Solicitar orçamento</Link>
          </div>
          <div className="panel">
            <h3>O que fazemos</h3>
            <ul className="check-list">
              {service.items.map((item) => (
                <li key={item}><FaCheckCircle /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <h2 className="section-title">Outros serviços</h2>
          <p className="section-lead">Conheça as demais soluções que oferecemos.</p>
          <div className="cards">
            {others.map((s) => (
              <Link key={s.slug} to={`/servicos/${s.slug}`} className="card">
                <span className="card__icon"><ServiceIcon name={s.icon} /></span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <span className="card__more">Saiba mais <FaArrowRight /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
