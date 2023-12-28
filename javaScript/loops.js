
// for(let i=1 ;i<=4 ; i++){
//     console.log(i);
// }

// let n = 6 ;
// let ans = 1 ;

// for(let i =1 ; i<=n ; i++){
//     ans = ans * i ;
// }

// console.log(ans)

// for(let i=1;i<=100 ; i+=2){
//     console.log(i);
// }

// for(let i=1 ;i<=100 ; i++){

//     if(i%2==0){
//         console.log(i);
//     }
// }

// let n = 7 ;

// let count = 0 ;

// for(let i=2;i<n;i++){

//     if(n%i==0){
//         count++;
//     }
// }
// if(count==0){
//     console.log("Prime")
// }else{
//     console.log("Not prime")
// }

// let n = 9 ;

// let ft = 0 ;
// let st = 1 ;

// for(let i=1 ; i<=n;i++){
//     console.log(ft);
//     let tt = ft + st ;

//     ft = st ;
//     st = tt ;
// }


// let n = 4 ;

// let i = 1 ;

// while(i<=n){
//     console.log(i);
//     i++;
// }

let n = 1223

let count = 0 

while(n>0){
    count = count*10 + n%10 
    n = Math.floor(n/10)
}
console.log(count)