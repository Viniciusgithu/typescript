
interface Player {
  name: string
  nickname: string
}

interface Action extends Player {
  coins: number
  buyCoins: number
}

interface Transport extends Player {
  capacity: number
}

interface Speeder extends Player {
  speed: number
  acceleration: number
}

function playGame<TypeGame extends Player>(game: TypeGame, newName: string, newNickName: string) {
  const newGame = game
  newGame.name = newName
  newGame.nickname = newNickName
  return newGame
}

