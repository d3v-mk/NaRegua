interface BtnWhatsappProps {
  className?: string
}

export default function BtnWhatsapp({ className = '' }: BtnWhatsappProps) {
  return (
    <button
      className={`fixed bottom-4 left-4 z-[9999] flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded shadow ${className}`}
      onClick={() => alert('Botão mock clicado!')}
      type="button"
    >
      {/* Ícone WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.373 0 0 5.373 0 12c0 2.115.55 4.087 1.512 5.82L0 24l6.36-1.68A11.908 11.908 0 0012 24c6.627 0 12-5.373 12-12 0-3.197-1.245-6.19-3.48-8.52zM12 21.6a9.598 9.598 0 01-4.92-1.38l-.352-.22-3.78 1.0 1.0-3.72-.22-.36A9.601 9.601 0 012.4 12c0-5.3 4.3-9.6 9.6-9.6s9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6zm5.13-6.12c-.1-.18-.37-.29-.77-.5-.4-.21-2.35-1.17-2.7-1.31-.35-.13-.6-.18-.85.18s-1 .5-1.25.5c-.26 0-.44-.02-.67-.03-.23-.01-.53-.19-.82-.5-.3-.31-1.1-1.07-1.1-2.6 0-1.54 1.13-2.75 1.29-2.95.16-.2.27-.4.4-.64.13-.24.06-.45 0-.5-.06-.06-.54-1.29-.74-1.77-.2-.48-.4-.42-.58-.42-.18 0-.4 0-.6 0-.2 0-.52.08-.8.38s-1.04 1.02-1.04 2.5c0 1.48 1.07 2.9 1.22 3.1.15.2 2.09 3.3 5.07 4.63.71.3 1.26.48 1.69.62.71.23 1.35.2 1.85.12.56-.1 1.72-.7 1.97-1.37.26-.67.26-1.25.18-1.37z" />
      </svg>
      WHATSAPP
    </button>
  )
}
