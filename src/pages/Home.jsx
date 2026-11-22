import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle, FaFileUpload } from 'react-icons/fa'
import PageBanner from '../components/PageBanner'
import ServiceIcon from '../components/ServiceIcon'
import { services } from '../data/services'

export default function Home() {
  return (
    <>
      <PageBanner
        tall
        image={null /* ex.: 'images/home.jpg' */}
        title="Segurança do Trabalho e Saúde Ocupacional"
        subtitle="Gestão para pequenas, médias e grandes empresas"
        text="Elaboração de PGR, GRO, eSocial, PPP, LTCAT, Laudos de Insalubridade e Periculosidade, CIPA, NR-12, Treinamentos de Segurança e Assistência Técnica em Perícias."
      />

      {/* Faixa de destaque do eSocial */}
      <section>
        <div className="esocial-strip__head">
          <div className="container">
            <h2>eSocial – Estamos aptos no atendimento às obrigatoriedades dos eventos de SST</h2>
          </div>
        </div>
        <div className="container esocial-strip__body">
          <div className="esocial-strip__badge">
            <FaFileUpload /> eSocial
          </div>
          <ul className="check-list">
            <li><FaCheckCircle /> S-2210 – Comunicação de Acidente de Trabalho (CAT)</li>
            <li><FaCheckCircle /> S-2220 – Monitoramento da Saúde do Trabalhador (ASO)</li>
            <li><FaCheckCircle /> S-2240 – Condições Ambientais do Trabalho (Agentes Nocivos)</li>
          </ul>
        </div>
      </section>

      {/* Nossos serviços */}
      <section className="section section--soft">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-lead">
            Está enfrentando problemas com a falta de documentação ou sem tempo para cuidar das obrigações de
            Segurança do Trabalho e Saúde Ocupacional? Veja como podemos ajudar.
          </p>
          <div className="cards">
            {services.map((s) => (
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

      {/* Chamada para ação */}
      <section className="section cta">
        <div className="container">
          <h2>Precisa regularizar a Segurança do Trabalho da sua empresa?</h2>
          <p>Fale com a nossa equipe e receba um atendimento sob medida.</p>
          <Link to="/contato" className="btn">Solicitar orçamento</Link>
        </div>
      </section>
    </>
  )
}
