import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
})

export const fetchClientes = async () => {
  const res = await api.get('/clientes/')
  return res.data
}
