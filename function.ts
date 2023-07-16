//Tipando os parâmetros da função

function showTicket(user: string, ticket: number) {
  console.log(`Olá ${user}. Seu número de bilhete é: ${ticket}`)
}


showTicket("Vinicius Pazos", 120)


function showReturn(message: string): string {
  return message
}

showReturn("Hello TypeScript!")