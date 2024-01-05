let inputBar = document.querySelector("input");
let selectTag = document.querySelector("select");
let btn = document.querySelector("button");
let cont = document.querySelector(".container");
let colorInput = document.querySelector(".color");


btn.addEventListener("click", function () {

    let inputvalue = inputBar.value;
    inputBar.value = "";
    let selectValue = selectTag.value;
    let color = colorInput.value;

    cont.innerHTML = "";

    for (let i = 1; i <= inputvalue; i++) {
        let ele = document.createElement("div");

        ele.classList.add(selectValue);
        ele.style.backgroundColor=color;

        ele.setAttribute("contenteditable" , "true")

        ele.addEventListener("dblclick",function(){
            cont.removeChild(ele);
        })

        cont.appendChild(ele);
    }

})