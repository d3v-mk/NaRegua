// src/components/Cortes.tsx
export default function Cortes() {
  const cortes = [
    { src: '/corte1.jpg', alt: 'Corte degradê estiloso' },
    { src: '/corte2.jpg', alt: 'Corte com risca personalizada' },
    { src: '/corte3.jpg', alt: 'Corte social com barba alinhada' },
    { src: '/corte4.jpg', alt: 'Corte americano moderno' },
    { src: '/corte5.jpg', alt: 'Corte freestyle com desenho' },
    { src: '/corte6.jpg', alt: 'Corte clássico na régua' },
  ]

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <p className="text-center text-red-600">CONFIRA NOSSA BARBEARIA</p>
      <h2 className="text-3xl font-bold mb-10 text-center">VEJA ALGUNS CORTES</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cortes.map((corte, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={corte.src}
              alt={corte.alt}
              className="w-full h-72 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
