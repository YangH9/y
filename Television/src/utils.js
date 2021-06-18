export function randomInt(count){
  return Math.floor(Math.random()*count)
}


export function randomArray(array=[]) {
  return array[randomInt(array.length)]
}
