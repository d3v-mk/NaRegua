import BtnAgendar from "./BtnAgendar"

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-white h-screen bg-cover bg-center font-poppins"
      style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
    >
      {/* Overlay preto transparente pra destacar o texto */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Conteúdo em cima da overlay */}
      <div className="relative z-10 flex flex-col items-center">
        <p className="text-red-600 font-mono uppercase mb-2 relative z-20">
            A PRIMEIRA CERVEJA É GRÁTIS
        </p>

        <h1
            className="text-6xl font-bold mb-6 text-white relative z-20"
            style={{
            position: 'relative',
            zIndex: 20,
            }}
        >
            The Gentleman's Club
            {/* holofote atrás */}
            <span
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '200%',
                height: '100%',
                background:
                'radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, transparent 70%)',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(40px)',
                zIndex: -1,
                pointerEvents: 'none',
                borderRadius: '50%',
            }}
            />
        </h1>

        <p
            className="text-xl max-w-xl font-thin text-center mb-8 text-white relative z-20"
            style={{
            position: 'relative',
            zIndex: 20,
            }}
        >
            oferecemos uma experiência única em cuidados masculinos, combinando tradição e modernidade.
        </p>
        
        <BtnAgendar />

      </div>
    </section>
  )
}
