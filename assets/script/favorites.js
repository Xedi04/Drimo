let id=new URLSearchParams(window.location.search).get("id");

let ourAll=document.querySelector(".our-cloud");

fetch("http://localhost:3000/FAVORITES/")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        ourAll.innerHTML+=`
        <div class="web8" style="border:1px solid black;">
        <img src="${element.image}" alt="">
        <h3>${element.name}</h3>
        <p>${element.description}</p>
    </div>
        `
    });
})

let Back=document.querySelector("#back");
Back.addEventListener("click", ()=>{
    window.location="./index.html"
})