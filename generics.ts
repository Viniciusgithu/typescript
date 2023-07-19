//Uso do Generics

/*

S => state
T => type
K => key
V => value
E => element

*/


function generics<T>(value: T): T {
  let generic: T
  generic = value
  return generic
}

function coworks<ArrayType>(array: ArrayType[]): ArrayType | undefined {
  return array[array.length - 1]
}

const namesCoworks = ['Job', 'Mike', 'Angel']

const actCoworks = coworks(namesCoworks)
