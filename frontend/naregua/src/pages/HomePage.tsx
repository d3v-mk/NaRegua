import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Servicos from '../components/Servicos'
import Cortes from '../components/Cortes'
import VisiteNos from '../components/VisiteNos'

function HomePage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.3)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Hero fixo no topo com opacidade controlada */}
      <div
        className={`fixed top-0 left-0 right-0 z-10 transition-opacity duration-500 ${
          scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
        }`}
      >
        <Hero />
      </div>

      {/* Conteúdo da página com margin-top pra não ficar atrás do Hero */}
      <div
        className={`
          relative z-20 flex flex-col md:flex-row items-center justify-center py-20 px-4 text-center md:text-left
          transition-transform duration-500
          ${scrolled ? '-translate-y-20' : 'translate-y-0'}
        `}
        style={{ marginTop: '100vh' }}
      >
        {/* Texto na esquerda */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <p className="text-red-600">
            The Gentleman's Club
          </p>
          <h1 className="text-4xl font-bold mb-4">
            MAIS DO QUE UM CORTE, UMA EXPERIÊNCIA
          </h1>
            <p className="mb-8">
            No <strong>The Gentleman's</strong>, acreditamos que um bom corte vai além da aparência — 
            é sobre se sentir confiante, autêntico e no controle do seu estilo.

            Nossa equipe de barbeiros experientes oferece um atendimento personalizado, 
            garantindo que você saia com o visual que sempre quis — do clássico ao moderno.
            </p>

          <button className="bg-red-600 px-6 py-3 rounded hover:bg-green-600 transition">
            RESERVAR MEU HORÁRIO AGORA
          </button>
        </div>

        {/* Imagem na direita */}
        <div className="md:w-1/2">
          <img
            src="/corte-exemplo.jpg"
            alt="Exemplo de corte"
            className="w-full max-w-md rounded shadow-lg mx-auto"
          />
        </div>
      </div>
      <Servicos />
      <Cortes />
      <VisiteNos />
    </div>
  )
}

export default HomePage
