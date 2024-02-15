// 4. Write a function that reverses a string without using the built-in reverse() method.

let reverseString = (string) =>{
    let newString = "";
    let r = string.length
    for (let i = r-1; i >= 0; i-- ){
         newString += string[i]
     }
     return newString
}
console.log(reverseString("mbabazi"))