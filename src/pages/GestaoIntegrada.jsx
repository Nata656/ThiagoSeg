import { FaChartLine, FaHardHat, FaShieldAlt } from 'react-icons/fa'
import PageBanner from '../components/PageBanner'

const highlights = [
  {
    title: 'Controle de dados',
    text: 'Todas as informações em um único lugar, simplificando o acesso e o controle de cada registro.',
  },
  {
    title: 'Integração total',
    text: 'Engenharia de Segurança, Medicina Ocupacional, eSocial e Previdência conectados em tempo real.',
  },
  {
    title: 'Otimizando tarefas',
    text: 'Com poucos cliques, acesso a relatórios, documentos, laudos técnicos, auditorias e muito mais.',
  },
]

const features = [
  {
    Icon: FaChartLine,
    title: 'Indicadores',
    text: 'Texto provisório: acompanhe vencimentos, exames e treinamentos com relatórios claros.',
  },
  {
    Icon: FaHardHat,
    title: 'Segurança do Trabalho',
    text: 'Texto provisório: PGR, EPIs, inspeções e laudos organizados por unidade e função.',
  },
  {
    Icon: FaShieldAlt,
    title: 'Conformidade',
    text: 'Texto provisório: eventos do eSocial enviados no prazo, sem multas nem retrabalho.',
  },
]

export default function GestaoIntegrada() {
  return (
    <>
      <PageBanner
        overlap
        image={null /* ex.: 'images/gestao.jpg' */}
        title="Gestão Integrada em SST."
        text="Integração entre Segurança do Trabalho e Saúde Ocupacional, aumentando a produtividade e otimizando tempo."
      />

      <section className="section section--soft" style={{ paddingTop: 0 }}>
        <div className="container cards overlap-cards">
          {highlights.map((h) => (
            <div key={h.title} className="card">
              <span className="accent-bar" />
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container features">
          {features.map(({ Icon, title, text }) => (
            <div key={title} className="feature">
              <span className="feature__icon"><Icon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
