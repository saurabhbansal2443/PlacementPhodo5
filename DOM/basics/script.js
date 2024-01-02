let h1tag = document.querySelector("#h1");
let ptag = document.querySelector(".ptag");
let imgtag = document.querySelector("img");
let box = document.querySelector("#box");
let circle = document.querySelector("#circle");

h1tag.innerHTML = "I am changed through JS "
ptag.style.color = "red";

//  imgtag.setAttribute("src","https://images.ctfassets.net/hrltx12pl8hq/5ZjPpfAhn1rZWeopnHiXb/3e1b9a709297905672a0d24eac94a873/thumb_nov22_03.jpg")

// imgtag.src = "https://images.ctfassets.net/hrltx12pl8hq/5ZjPpfAhn1rZWeopnHiXb/3e1b9a709297905672a0d24eac94a873/thumb_nov22_03.jpg"

imgtag.setAttribute("src","https://images.ctfassets.net/hrltx12pl8hq/5ZjPpfAhn1rZWeopnHiXb/3e1b9a709297905672a0d24eac94a873/thumb_nov22_03.jpg")
// box.classList.add("circle");
// circle.classList.add("box");
// console.log(box.classList)
imgtag.setAttribute("width","100px")
box.classList.add("blue")
circle.classList.add("red")

// box.classList.remove("blue")

box.classList.toggle("blue");