import Header from './Header'
import Footer from './Footer'
import BtnWhatsapp from './BtnWhatsapp'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow">{children}</main>
      <BtnWhatsapp />
      <Footer />
    </div>
  )
}

