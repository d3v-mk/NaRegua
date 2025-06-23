import { useState } from 'react'
import ClienteForm from '../features/Cliente/ClienteForm'
import ClienteList from '../features/Cliente/ClienteList'

export default function ClientesPage() {
  const [reloadFlag, setReloadFlag] = useState(false)
  const [clienteIdSelecionado, setClienteIdSelecionado] = useState<number | null>(null)

  const handleSuccess = () => {
    setReloadFlag(prev => !prev)  // força reload da lista
    setClienteIdSelecionado(null) // limpa o form pra novo cadastro
  }

  // Quando clicar num cliente, seleciona pra editar
  const handleEditarCliente = (id: number) => {
    setClienteIdSelecionado(id)
  }

  return (
    <div className="max-w-4xl mx-auto my-10">
      <h1 className="text-3xl font-extrabold mb-6">Clientes</h1>
      <ClienteForm clienteId={clienteIdSelecionado ?? undefined} onSuccess={handleSuccess} />
      <ClienteList key={reloadFlag.toString()} onEdit={handleEditarCliente} />
    </div>
  )
}
