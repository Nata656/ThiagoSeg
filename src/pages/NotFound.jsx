import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'

export default function NotFound() {
  return (
    <>
      <PageBanner title="Página não encontrada." text="O endereço que você acessou não existe ou foi alterado." />
      <section className="section notfound">
        <div className="container">
          <Link to="/" className="btn">Voltar para a Home</Link>
        </div>
      </section>
    </>
  )
}
