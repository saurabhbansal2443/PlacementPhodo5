let inputBar = document.querySelector("input");
let addBtn = document.querySelector(".add");
let taskCont= document.querySelector(".taskContainer");

addBtn.addEventListener("click",function(){
    let taskValue = inputBar.value;
    inputBar.value = "";

    if(taskValue!=""){
    
    let myele = document.createElement("div");
   
    myele.classList.add("task");

    myele.innerHTML=`<p> ${taskValue} </p> <button> Delete </button>`
     
    let delBtn = myele.querySelector("button");

    delBtn.addEventListener("click",function(){
        taskCont.removeChild(myele);
    })

     taskCont.appendChild(myele);
      console.log(myele)
}
})