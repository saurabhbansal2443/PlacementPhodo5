let obj = {
    name :"saurabh",
    age : 24 ,
    phoneNumber : "98765432",
    adress:{
        houseNo : 678,
        city : "delhi"
    }
}

let newObj = JSON.parse(JSON.stringify(obj)) ;

 obj.name = "aman";
 obj.adress.city = "mumbai";

console.log(obj)

console.log(newObj)