import { useEffect, useState } from 'react'
import { fetchClientes } from './api'

type Cliente = {
  id: number
  nome: string
  email: string
}

export default function ClienteList() {
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchClientes()
      .then(data => setClientes(data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Carregando clientes...</div>

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lista de Clientes</h2>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id} className="border p-2 rounded mb-2 hover:bg-gray-100 transition">
            <strong>{cliente.nome}</strong> - {cliente.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
