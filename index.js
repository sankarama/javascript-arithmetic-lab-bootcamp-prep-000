var number = 10

function add5() {
  number += add5
  
}

function divideBy3() {
  number /= 3 
}

console.log(number)

add5()
console.log(number)


divideBy3()

console.log(number)