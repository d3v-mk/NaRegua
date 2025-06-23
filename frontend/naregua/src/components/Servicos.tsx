export default function Servicos() {
  const cortes = [
    { src: '/servico1.jpg', alt: 'CORTE MASCULINO' },
    { src: '/servico2.jpg', alt: 'CORTE INFANTIL' },
    { src: '/servico3.jpg', alt: 'BARBA E BIGODE' },
    { src: '/servico4.jpg', alt: 'SOBRANCELHA' },
    { src: '/servico5.jpg', alt: 'BARBOTERAPIA' },
    { src: '/servico6.jpg', alt: 'PRODUTOS EM GERAL' },
  ]

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <p className="text-center text-red-600">NOSSOS SERVIÇOS</p>
      <h2 className="text-3xl font-bold mb-10 text-center">O QUE OFERECEMOS?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cortes.map((corte, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={corte.src}
              alt={corte.alt}
              className="w-full h-72 object-cover"
            />

            {/* Overlay com título e botão */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-lg font-bold text-white mb-3 drop-shadow">
                {corte.alt}
              </h3>
              <a
                href="https://wa.me/5599999999999?text=Quero%20agendar%20esse%20corte!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-2 rounded shadow"
              >
                AGENDAR
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
