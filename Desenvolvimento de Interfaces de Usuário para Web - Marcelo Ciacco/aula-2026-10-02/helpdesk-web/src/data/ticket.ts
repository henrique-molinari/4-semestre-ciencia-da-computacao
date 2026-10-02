import type { Ticket } from "../types/Tickets";

export const initialTickets: Ticket[] = [

    {
        id: 1,
        title: "Problema no login",
        description: "Usuário não consegue acessar o sistema",
        status: "Aberto",
        priority: "Alta"
    },
    
    {
        id: 2,
        title: "Atualização de cadastro",
        description: "Cliente solicitou alteração de endereço",
        status: "Em Andamento",
        priority: "Media"
    },
    
    {
        id: 3,
        title: "Troca de senha",
        description: "Sneha do usuario foi redefinida",
        status: "Concluido",
        priority: "Baixa"
    },
    
    {
        id: 4,
        title: "Erro ao ferar relatório",
        description: "O relatório financeiro não está sendo gerado",
        status: "Aberto",
        priority: "Alta"
    },

    
    {
        id: 5,
        title: "Atualização de informações",
        description: "Usuario precisa alterar o endereço",
        status: "Aberto",
        priority: "Baixa"
    },
    
]