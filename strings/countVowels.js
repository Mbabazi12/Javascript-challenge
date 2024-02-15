// 5. Write a function that takes a sentence string and returns the number of vowels in the sentence.

let countVowels = (vowels) =>{
    let count = 0;
    let r = vowels.length;
    for(let i=0; i < r; i++){
        if("aeiou".includes(vowels[i]) || "AEIOU".includes(vowels[i])){
            count = count +1
        }
    }
    return count
}
console.log(countVowels("Mbabazi Diane"))