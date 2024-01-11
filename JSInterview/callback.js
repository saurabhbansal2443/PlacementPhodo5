// console.log("start")

// function postLinkedin(project){
//     console.log(project + " is ready and posted on linkdein");
// }

// function makeProject(projectName,postLinkedin){
    
//     setTimeout(function(){
//      let project  = projectName + "code";
//      postLinkedin(project);
//     },5000)
// }

// makeProject("Youtube",postLinkedin);

// console.log("end")


let raw = "maida";

function makeDough(raw , callback){
    setTimeout(function(){
        let dough = raw + "water";
        callback(dough);
    },2000)
}

function makeBase(dough,callback){
    setTimeout(function(){
        let base = dough + "vegatables ";
        callback(base);
    },2000)
}

function bakePizza(base , callback){
    setTimeout(function(){
        let pizza = base  + "heat";
        callback(pizza);
    },2000)
}

console.log("Start")

makeDough(raw,function(dough){
        console.log("Dough is ready ")
    makeBase(dough , function(base){
        console.log("Base is Ready");
        bakePizza(base,function(bakedPizza){
            console.log("Baked pizza is here")
        })
    });
})

console.log("End")