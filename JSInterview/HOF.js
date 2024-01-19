// let arr = [10,20,30,40,50];


// let res = [];
// arr.forEach(printTriple)

// function printEle(ele , idx , arr ){
//     console.log(ele , idx , arr)
//  }

//  function printDoubleEle(ele , idx , arr ){
//     console.log(ele*2 , idx , arr)
//  }
   
//  function printTriple(ele , idx  , arr ){
//     res.push(ele + 5 );
//  }

//  console.log(arr , res);

//let arr = [10 ,20 ,35 , 45, 50 ];


// let ans = arr.map(function(ele ){
//     return ele/5;
// });

// let ans = arr.filter(function(ele){
//     return ele%2==0
// })

// console.log(arr , ans );

// let sum = 0 ;

// for(let i=0 ; i<arr.length ; i++){
//     sum = sum + arr[i];
// }

// console.log(sum);


// let ans = arr.reduce(function(pre , curr){
//     return pre * curr ;
// }  )

// console.log(ans)


let arr = [1,2,3,4,5];


let ans = arr.map(function(ele){
    return ele*ele ;
})

ans = ans.filter(function(ele , idx){
    return idx%2 == 0 ;
});

ans = ans.reduce(function(pre , curr){
    return pre + curr ;
})

console.log(ans);


