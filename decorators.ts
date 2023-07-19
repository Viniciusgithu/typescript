
function Decorator() {
  return function (target, key, descriptor) {
    descriptor.value = function (value: number) {
      console.log(`Calculando ${value} elevado ao quadrado`)
      return value ** 2
    }
  }
}

class Player {
  name: string

  constructor(name: string) {
    this.name = name
  }

  @Decorator
  calculate(value: number) {
    console.log(`Calculando ${value} x 2`)
    return value * 2
  }
}

const playGame = new Player('Quiz')
const result = playGame.calculate(5)
console.log(`Resultado: ${result}`)