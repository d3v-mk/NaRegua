// src/components/VisiteNos.tsx
export default function VisiteNos() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Venha nos visitar</h2>
          <p className="mb-4">
            Estamos te esperando na régua! Ambiente climatizado, cerveja gelada, e um corte que vai te deixar novo.
          </p>
          <p className="mb-2">
            📍 <strong>Rua dos Barbeiros, 123</strong> – Centro, Barber City
          </p>
          <p className="mb-4">🕐 Segunda a Sábado, das 9h às 20h</p>

          <a
            href="https://www.google.com/maps/place/Rua+dos+Barbeiros,+123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 transition-colors px-6 py-2 rounded shadow text-white font-medium"
          >
            Ver no Google Maps
          </a>
        </div>

        {/* Mapa embed */}
        <div className="w-full h-64 md:h-80 rounded shadow overflow-hidden">
          <iframe
            title="Mapa localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.468649331917!2d-46.64814188454366!3d-23.58813166849988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59bcf75fcb47%3A0x9d1ecb9fda76dcbd!2sRua%20dos%20Barbeiros%2C%20123!5e0!3m2!1spt-BR!2sbr!4v1662300000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
