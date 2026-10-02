export type TicketStatus = 
    | "Aberto"
    | "Em Andamento"
    | "Concluido"

export type TicketPriority =
    | "Baixa"
    | "Media"
    | "Alta"

export type Ticket = {
    id: number,
    title: string,
    description: string,
    status: TicketStatus,
    priority: TicketPriority
}