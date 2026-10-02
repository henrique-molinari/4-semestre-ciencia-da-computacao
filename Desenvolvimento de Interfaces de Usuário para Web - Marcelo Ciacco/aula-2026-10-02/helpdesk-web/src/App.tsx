import { Header } from "./components/Header"
import { TicketCard } from "./components/TicketCard"
import { Panel } from "./components/Panel"
import { initialTickets } from "./data/ticket";


function App() {

  return (
    <>
      <div className='min-h-screen bg-slate-100'>
        <Header
          title = "HelpDesk Lite" //Passando o HeaderProps (props)
          subtitle = "Gerenciamento de chamados" //Passando o HeaderProps (props)
        />

        <main className="mx-auto max-w-6xl p-6 mt-2">
          <Panel title="Chamados Recentes">
          

            <div className="grid gap-4 md:grid-cols-2">
              {initialTickets.map((ticket)=> ( 
                <TicketCard
                  key={ticket.id}
                  title={ticket.title}
                  description={ticket.description}
                  status= {ticket.status}
                  priority={ticket.priority}
                />
                
              ))}
          

          </div>

        </Panel>
        </main>
      </div>
    </>
  )
}

export default App