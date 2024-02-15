// 10. Write a function that takes an object and returns the number of properties/keys. 

function countProperties(obj) {
    let keys = Object.keys(obj);
   
    return keys.length;
}

let obj = {
    name: 'Diane',
    age: 20,
    city: 'Nyarutarama',
    number: '0790139377',
    level: 'Y2'
};

console.log(countProperties(obj));
