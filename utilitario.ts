/* 

 Tipos Utilitários:
 Manipular os tipos de forma eficiente
 Permite transformar tipos existentes de maneira limpa e reutilizável
 Uma forma de trabalhar com tipagem

*/

interface soccerTeam {
  name: string
  age: number
  pet: string
  color: string
  shield: string
  followers: string
  site: string
  email: string
  location: string
}

type teamName = Pick<soccerTeam, 'name' | 'color' | 'pet'>
let aboutTeam: teamName

aboutTeam.name = "Botafogo"
aboutTeam.pet = "Cachorro"
aboutTeam.color = "Preto & Branco"

type teamLowered = Omit<soccerTeam, 'followers' | 'site' | 'email' | 'location' | 'pet' | 'shield'>
let aboutLowered: teamLowered

aboutLowered.name = "Coritiba"
aboutLowered.color = "Verde & Branco"
aboutLowered.age = 114