import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ClientesPage from './pages/Clientes'

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-blue-600 p-4 text-white">
        <Link to="/" className="mr-4 font-bold">NaRegua</Link>
        <Link to="/clientes" className="hover:underline">Clientes</Link>
      </nav>

      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<h1>Bem-vindo ao NaRegua!</h1>} />
          <Route path="/clientes" element={<ClientesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
