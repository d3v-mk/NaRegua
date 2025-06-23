import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
})

// Listar clientes
export const fetchClientes = async () => {
  const res = await api.get('/clientes/')
  return res.data
}

// Cadastrar cliente
export const cadastrarCliente = async (clienteData: {
  nome: string
  email?: string
  telefone?: string
}) => {
  const res = await api.post('/clientes/', clienteData)
  return res.data
}

// Atualizar cliente
export const atualizarCliente = async (
  clienteId: number,
  clienteData: {
    nome?: string
    email?: string
    telefone?: string
  }
) => {
  const res = await api.put(`/clientes/${clienteId}`, clienteData)
  return res.data
}

export const fetchClientePorId = async (id: number) => {
  const res = await api.get(`/clientes/${id}`)
  return res.data
}


// Deletar cliente
export const deletarCliente = async (clienteId: number) => {
  const res = await api.delete(`/clientes/${clienteId}`)
  return res.data
}

