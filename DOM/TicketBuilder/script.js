let input1 = document.querySelector(".i1");
let input2 = document.querySelector(".i2");
let input3 = document.querySelector(".i3");

let addBtn = document.querySelector(".add");
let delBtn = document.querySelector(".del");

let cont = document.querySelector(".ticketContainer");

let flag = false ;


addBtn.addEventListener("click", function () {
    let ele = document.createElement("div");
    ele.classList.add("ticket");

    ele.innerHTML = `<p> ${input1.value}</p>
                     <p>${input2.value}</p>
                     <p>${input3.value}</p>`

    ele.addEventListener("dblclick",function(){
        if( flag == true ){
        cont.removeChild(ele);
        }
    })

    cont.appendChild(ele);


})

delBtn.addEventListener("click",function(){
    if(flag == false){
      delBtn.style.color = "red"
    }else{
        delBtn.style.color = "black"
    }

    flag = !flag;
})

