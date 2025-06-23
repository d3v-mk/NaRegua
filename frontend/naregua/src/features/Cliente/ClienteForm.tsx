import { useState, useEffect } from 'react'
import { cadastrarCliente, atualizarCliente, fetchClientePorId } from './api'

type ClienteFormProps = {
  clienteId?: number
  onSuccess: () => void
}

export default function ClienteForm({ clienteId, onSuccess }: ClienteFormProps) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Quando clienteId mudar, busca os dados e popula o form
  useEffect(() => {
    if (!clienteId) {
      // Se não tiver clienteId, limpa o form
      setNome('')
      setEmail('')
      setTelefone('')
      return
    }
    setLoading(true)
    fetchClientePorId(clienteId)
      .then(data => {
        setNome(data.nome)
        setEmail(data.email || '')
        setTelefone(data.telefone || '')
      })
      .catch(() => setError('Erro ao carregar cliente'))
      .finally(() => setLoading(false))
  }, [clienteId])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      if (clienteId) {
        await atualizarCliente(clienteId, { nome, email, telefone })
      } else {
        await cadastrarCliente({ nome, email, telefone })
      }
      onSuccess()
    } catch {
      setError('Erro ao salvar cliente')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="tel"
        placeholder="Telefone"
        value={telefone}
        onChange={e => setTelefone(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Salvando...' : 'Salvar'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}
