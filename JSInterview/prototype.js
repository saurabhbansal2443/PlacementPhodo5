
let arr = [1,2,33,5,45,];
let num = [1,2,2,3,34,4]

// arr.sum()

// let ans = arr.map((e)=>{
//     return e*2;
// })

// console.log(ans);

Array.prototype.sum = function(){
    let arr = this ;
    let sum = 0 ;

    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
        
    }
    return sum ;
}

console.log(num.sum())