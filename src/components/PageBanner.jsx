import './PageBanner.css'

/**
 * Banner do topo de cada página.
 * - title: título grande
 * - subtitle: linha em negrito abaixo do título (opcional)
 * - text: texto em itálico (opcional)
 * - image: foto de fundo, ex.: '/images/home.jpg' (opcional)
 * - tall: banner mais alto (usado na Home)
 * - overlap: deixa espaço para cards "sobrepostos" à borda de baixo
 */
export default function PageBanner({ title, subtitle, text, image, tall, overlap, children }) {
  const style = image ? { '--banner-image': `url(${image})` } : undefined

  return (
    <section
      className={`banner${tall ? ' banner--tall' : ''}${overlap ? ' banner--overlap' : ''}${image ? ' banner--photo' : ''}`}
      style={style}
    >
      <div className="container banner__content">
        <h1 className="banner__title">{title}</h1>
        {subtitle && <p className="banner__subtitle">{subtitle}</p>}
        {text && <p className="banner__text">{text}</p>}
        {children}
      </div>
    </section>
  )
}
