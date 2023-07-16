//Declarando objetos

type Point = {
  x: number,
  y: number
}

function printCoord(points: Point){
  console.log(`O eixo x é: ${points.x}`)
  console.log(`O eixo y é: ${points.y}`)
}


printCoord({x: 50, y: 50})


type User = {
  name: string,
  email?: string,
  age: number,
  isAdmin: boolean
}

let newUser: User = {
  name: "Vinicius",
  age: 27,
  isAdmin: true
}

// Intersecção de tipos
type PlayerInfo = Point & User

let geralInfo: PlayerInfo = {
  name: "Julius",
  age: 50,
  isAdmin: false,
  x: 50,
  y: 300
}