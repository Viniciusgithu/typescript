//Declarando interface 


interface User {
  id: number,
  name: string,
  email?: string,
}

let newUser: User = {
  id: 500,
  name: "Kronos",
  email: "kronos@gmail.com"
}