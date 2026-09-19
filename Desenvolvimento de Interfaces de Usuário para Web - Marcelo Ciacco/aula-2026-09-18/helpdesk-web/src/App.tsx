import { Header } from "./components/Header"

function App() {

  return (
    <>
      <div className='min-h-screen bg-slate-100'>
        <Header />

        <main className="mx-auto max-w-6xl p-6 mt-2">
          <h2 className="mb-4 text-xl font-semibold">Chamados recentes</h2>
          <div className="rounded-lg bg-white p-5 shadow">
            <h3 className="font-semibold">Problema no login</h3>
            <p className="mt-2 text-slate-600">Usuário não consegue acessar o sistema</p>
            <span className="mt-4 inline-block rounded-full-lg bg-slate-200 px-3 py-1 text-small">Aberto</span>
          </div>
        </main>
      </div>
    </>
  )
}

export default App