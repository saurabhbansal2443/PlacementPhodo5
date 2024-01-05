let addBtn = document.querySelector(".addbtn");
let taskAdder = document.querySelector(".task-adder");
let taskColors = document.querySelector(".colorPart");
let activeBtn = document.querySelector(".active");
let textArea = document.querySelector(".ta");
let ticketCont = document.querySelector(".ticket-Container");

addBtn.addEventListener("click", function () {
    taskAdder.classList.toggle("hidden");
})

taskColors.addEventListener("click", function (event) {

    let ele = event.target;
    //   console.log(ele.classList)
    if (ele.classList[0] == "box") {
        activeBtn.classList.remove("active");
        ele.classList.add("active");
        activeBtn = ele;
    }
})

textArea.addEventListener("keydown" , function(event){
   if(event.key == "Enter"){

      let task = textArea.value ;
      let activeColor =  activeBtn.classList[1];

      let newTicket = document.createElement("div");
      newTicket.classList.add("ticket");
      newTicket.innerHTML=` <div class="ticket-color ${activeColor}"></div>
      <div class="ticket-task">${task}</div>`
     
       ticketCont.appendChild(newTicket);

      textArea.value="";
      taskAdder.classList.toggle("hidden");
   }
})

