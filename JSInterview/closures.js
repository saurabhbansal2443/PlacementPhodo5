let { inc, dec } = (function () {
    let count = 0;
    return {
        inc: function () {
            count = count + 1;
            console.log(count);
        }
        , dec: function () {
            count = count - 1;
            console.log(count);
        }
    };

})()

// let obj = {
//     name : "saurabh",
//     age : 24 , 
//     phone : "987654323456789"
// }

// let {age} = obj;

// console.log(age)

let arr = ["first" , "second" , "third"];

let [a , b ] = arr ;

console.log(a , b)





