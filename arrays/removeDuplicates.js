// 7. Write a function that removes duplicate values from an array.

let removeDuplicate = (arr) =>{
    let newArray = [];
    let  q = arr.length
    for (let i = 0; i < q; i++){
        if(!newArray.includes(arr[i])){
            newArray.push(arr[i]);
        }
    }
    return newArray
}
console.log(removeDuplicate([12,2,43,12,4,54,87,43]))