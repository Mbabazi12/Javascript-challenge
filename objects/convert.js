// 12. Write a function that takes an object and converts it to an array of key-value pairs.

function convertToArray(obj) {
    
    return Object.entries(obj);
}

var obj = { Daddy: 'Joseph', Mummy: 'Claire', Brother: 'Richard' };
var result = convertToArray(obj);

console.log(result);
