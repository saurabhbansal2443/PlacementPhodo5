let container = document.querySelector(".container");
window.addEventListener("load",getData("politics"));
async function getData(query){
      let data = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2023-12-12&sortBy=publishedAt&apiKey=2781f5775c4f4c249902a991ffde922e`);
      let dataObj = await data.json();
      console.log(dataObj);
      screenUpdate(dataObj.articles);
}
function screenUpdate(arr){
    container.innerHTML="";

  for(let i=0;i<arr.length ; i++){
    let obj = arr[i];

    let myEle = document.createElement("div");
    myEle.innerHTML = ` <div class="card mx-5 my-5" style="width: 18rem;">
    <img src="${obj.urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${obj.author}</h5>
      <p class="card-text">${obj.title}</p>
      <a href="${obj.url}" target="_blank" class="btn btn-primary">News Link</a>
    </div>
  </div>`
  container.appendChild(myEle);
  }
}