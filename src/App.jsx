import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import GestaoIntegrada from './pages/GestaoIntegrada'
import Servico from './pages/Servico'
import Contato from './pages/Contato'
import NotFound from './pages/NotFound'
import './styles/pages.css'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/gestao-integrada" element={<GestaoIntegrada />} />
          <Route path="/servicos/:slug" element={<Servico />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
