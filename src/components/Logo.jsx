import { site } from '../data/site'

// Logo provisório (escudo + nome). Quando tiver o logo oficial, troque por:
// <img src={`${import.meta.env.BASE_URL}images/logo.svg`} alt={site.name} className="logo__img" />
export default function Logo({ showTagline = false }) {
  return (
    <span className="logo">
      <svg className="logo__mark" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 4 8 13v17c0 15 10 26 24 30 14-4 24-15 24-30V13L32 4z" fill="currentColor" />
        <path
          d="m21 32 8 8 15-16"
          fill="none"
          stroke="var(--orange-500)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="logo__text">
        <span className="logo__name">{site.name}</span>
        {showTagline && <span className="logo__tagline">{site.tagline}</span>}
      </span>
    </span>
  )
}
