import { useEffect, useState } from 'react'
import { fetchClientes } from './api'

type Cliente = {
  id: number
  nome: string
  email: string | null
  telefone: string | null
}

type ClienteListProps = {
  onEdit: (id: number) => void
}

export default function ClienteList({ onEdit }: ClienteListProps) {
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchClientes()
      .then(data => setClientes(data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Carregando clientes...</div>

  return (
    <div className="p-4 mt-6">
      <h2 className="text-xl font-bold mb-4">Lista de Clientes</h2>
      {clientes.length === 0 ? (
        <p className="text-gray-500">Nenhum cliente cadastrado.</p>
      ) : (
        <ul>
          {clientes.map(cliente => (
            <li
              key={cliente.id}
              onClick={() => onEdit(cliente.id)}
              className="border p-2 rounded mb-2 hover:bg-gray-100 cursor-pointer transition"
            >
              <strong>{cliente.nome}</strong><br />
              <span className="text-sm text-gray-600">
                {cliente.email || 'Sem email'} • {cliente.telefone || 'Sem telefone'}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
