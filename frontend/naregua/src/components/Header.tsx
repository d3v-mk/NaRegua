import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Sidebar from './SideBar'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const buttons = [
    { label: 'Horarios', to: '/horarios' },
    { label: 'Promoções', to: '/promocoes' },
    { label: 'Equipe', to: '/equipe' },
    { label: 'Contato', to: '/contato' },
  ]

  return (
    <>
        <header
        className={`
            fixed top-0 left-0 right-0 z-50 transition-colors duration-500
            bg-transparent shadow-none
        `}
        >

        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Botões visíveis no mobile (2 primeiros) */}
          <nav className="flex space-x-4 md:hidden">
            {buttons.slice(0, 2).map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className={`
                  px-4 py-2 rounded-md border border-white/70 text-white/90 font-semibold
                  transition-colors duration-300
                  hover:bg-white hover:text-black
                  ${scrolled ? 'border-white text-white' : 'border-white/70 text-white/90'}
                `}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Botão hambúrguer no mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

          {/* Navegação desktop */}
          <nav className="hidden md:flex space-x-4 justify-center flex-grow">
            {buttons.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className={`
                  px-4 py-2 rounded-md border border-white/70 text-white/90 font-semibold
                  transition-colors duration-300
                  hover:bg-white hover:text-black
                  ${scrolled ? 'border-white text-white' : 'border-white/70 text-white/90'}
                `}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <Sidebar buttons={buttons} menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
