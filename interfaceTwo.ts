
interface system {
  isAdmin: boolean
  accountType: string
}

interface infoUser extends system {
  name: string
  age: number
  job: string
}

let user: infoUser

user.isAdmin = false
user.accountType = "Gold"
user.name = "Jacob"
user.age = 30
user.job = "Teacher"

