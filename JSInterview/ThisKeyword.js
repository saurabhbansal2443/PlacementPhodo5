// let obj = {
//     name : "saurabh",
//     city : "delhi",
//     printName : ()=>{
//         console.log(this.name , this.city );
//     }
// }

// obj.printName();

// console.log(this)

let obj1 = {
    name : "Amit Modi ",
    age : "47",
    print : function(){
        console.log(this.name + " is saying Hi ")
    },
    steps : function(n , m ){
        console.log(this.name + " is walking " + n + "  steps " , m )
    }

}

let obj2 = {
    name : "lalit",
    age : 98
}

// obj1.print.call(obj2)

//  obj1.steps(23 , 89);

// obj1.steps.call(obj2 , 45 , 78 )

// obj1.steps.apply(obj2 , [ 45 , 78] )

let steps= obj1.steps.bind(obj2,45,78);

steps()

