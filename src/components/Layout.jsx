import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

// Estrutura comum a todas as páginas: topo + conteúdo da página + rodapé + WhatsApp
export default function Layout() {
  const { pathname } = useLocation()

  // Volta ao topo ao trocar de página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
