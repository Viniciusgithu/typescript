//Arquivo para exemplificar o uso de type no TypeScript

type IdType = string | number | undefined

type ObjectType = {
  id: number,
  name: string,
  avatar: string,
}


let userID: IdType


//Type Assertions

let useObject = {} as ObjectType
useObject.id = 5000
useObject.name = "Kal"
useObject.avatar = "Leão"

