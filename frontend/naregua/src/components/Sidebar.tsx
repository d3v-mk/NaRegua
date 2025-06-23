import { Link } from 'react-router-dom'

type SidebarProps = {
  buttons: { label: string; to: string }[]
  menuOpen: boolean
  onClose: () => void
}

export default function Sidebar({ buttons, menuOpen, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-black bg-opacity-95 shadow-lg z-50
          transform transition-transform duration-300
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:hidden
        `}
      >
        <div className="p-6 flex flex-col space-y-6">
          {buttons.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={onClose}
              className="text-white font-semibold text-lg hover:text-yellow-400"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay para fechar menu ao clicar fora */}
      {menuOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}
    </>
  )
}
