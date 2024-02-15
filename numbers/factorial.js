// 2. Write a function that takes a number and calculates its factorial recursively

let factorial = (input) => {
        let number = 1;
         for (let i = input; i >= 1; i--){
           number = number * i
            }
       return number;
        }
      console.log(factorial(10));