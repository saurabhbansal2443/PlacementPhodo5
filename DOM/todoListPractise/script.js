let inputBar = document.querySelector("input");
let addBtn = document.querySelector(".btn");
let cont = document.querySelector("ul");
addBtn.addEventListener("click",function(){
    let task = inputBar.value;
    if(task == "") return ;
    inputBar.value="";

    let ele = document.createElement("li");

    ele.innerHTML = `${task} <button> Delete </button>`;
    let deletebtn = ele.querySelector("button");
    deletebtn.addEventListener("click",function(){
        cont.removeChild(ele);
    })

    cont.appendChild(ele);
   
})