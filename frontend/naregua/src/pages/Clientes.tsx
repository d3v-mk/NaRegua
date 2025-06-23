import ClienteList from '../features/Cliente/ClienteList'

export default function ClientesPage() {
  return (
    <div className="max-w-4xl mx-auto my-10">
      <h1 className="text-3xl font-extrabold mb-6">Clientes</h1>
      <ClienteList />
    </div>
  )
}
