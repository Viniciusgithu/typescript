
class Player {
  name: string
  private isAdmin: boolean
  coins: number
  protected speed: number

  constructor(name: string, isAdmin: boolean, coins: number, speed: number) {
    this.name = name
    this.isAdmin = isAdmin
    this.coins = 10
    this.speed = 2
  }

  public(rate: number, time: number) {
    this.speed = rate * time
  }

}

class UserId extends Player {
  gaming: number
  constructor(name: string, coins: number, gaming: number) {
    super(name, coins)
    this.gaming = gaming
  }

  odds() {
    for (let i = 0; i < this.gaming; 1++) {
      console.log('OK!')
    }
  }

  erase() {
    this.coins = 0
    this.speed = 0
  }

}

let game = new UserId('Job', 20, 20)
