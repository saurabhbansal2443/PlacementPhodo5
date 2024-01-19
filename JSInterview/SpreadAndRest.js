let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let ans = [...arr1, ...arr2, 99, 100, ...arr3]

// console.log(ans)

// function sum( n , m ){
//     return n + m ;
// }

// function sum( n , m , q  ){
//     return n + m + q;
// }

function sum(...arr) {
    return arr.reduce(function (pre, curr) {
        return pre + curr;
    })
}

console.log(sum(1, 2, 6, 1, 2, 3, 9, 4, 6, 5))