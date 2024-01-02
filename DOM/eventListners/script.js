let h1tag = document.querySelector(".h1tag");
let imgTag = document.querySelector("img");
let inputTag = document.querySelector("#ip");

let flag = true;
h1tag.addEventListener("click", function () {
    if (flag == true) {
        h1tag.innerHTML = "I am changed through js "
        flag = false;
    } else {
        h1tag.innerHTML = "I am default text  "
        flag = true;
    }
})

imgTag.addEventListener("click",function(){
    imgTag.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpESGunEFTMTk32LQjDVeQed33Pp7thTMz_A&s"
})

// inputTag.addEventListener("keyup" , function(){
//     console.log("UP ");
// })
// inputTag.addEventListener("keydown" , function(){
//     console.log("DOWN ");
// })
// inputTag.addEventListener("keypress" , function(){
//     console.log("PRESS ");
// })

// inputTag.addEventListener("change",function(){
//     console.log("change event ")
// })