// 1. Write a function that takes a number and determines if it is a prime number. Return true if prime, false if not.


let isPrime = (number) =>{
  let state = 0;
  if (number <= 1){
      return `false`
  }
  for (i = 2; i <= number; i++){
      if (number % i == 0){
          state = state + 1
      }
  }
  if (state == 1){
      return `true`
  }else{
      return `false`
  }
}
console.log(isPrime(59))