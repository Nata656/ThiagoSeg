import { FaBullseye, FaCheckCircle, FaEye, FaHandshake } from 'react-icons/fa'
import PageBanner from '../components/PageBanner'
import { site } from '../data/site'

const pillars = [
  {
    Icon: FaBullseye,
    title: 'Missão',
    text: 'Texto provisório: a missão da empresa em uma ou duas frases.',
  },
  {
    Icon: FaEye,
    title: 'Visão',
    text: 'Texto provisório: onde a empresa quer chegar nos próximos anos.',
  },
  {
    Icon: FaHandshake,
    title: 'Valores',
    text: 'Texto provisório: ética, compromisso com a vida, transparência, responsabilidade…',
  },
]

export default function QuemSomos() {
  return (
    <>
      <PageBanner
        image={null /* ex.: 'images/quem-somos.jpg' */}
        title="Quem Somos."
        text="Compromisso com a segurança, a saúde e a vida de quem trabalha."
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="accent-bar" />
            <h2>Sobre a {site.name}</h2>
            <p>
              Texto provisório: conte aqui a história da empresa — quando começou, quem é o responsável técnico, a
              experiência da equipe e o tipo de cliente atendido.
            </p>
            <p>
              Texto provisório: destaque os diferenciais, como atendimento personalizado, agilidade na entrega da
              documentação e acompanhamento contínuo.
            </p>
          </div>
          <div className="panel">
            <h3>Por que escolher a {site.name}?</h3>
            <ul className="check-list">
              <li><FaCheckCircle /> Atendimento a empresas de todos os portes</li>
              <li><FaCheckCircle /> Equipe técnica qualificada</li>
              <li><FaCheckCircle /> Documentação em conformidade com as NRs</li>
              <li><FaCheckCircle /> Gestão integrada de SST e eSocial</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container cards">
          {pillars.map(({ Icon, title, text }) => (
            <div key={title} className="card">
              <span className="card__icon"><Icon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
