let id = new URLSearchParams(window.location.search).get("id");

let divAll = document.querySelector(".our-cloud");

fetch(`http://localhost:3000/DRIMO/${id}`)
    .then(res => res.json())
    .then(data => {
        divAll.innerHTML += `
    <div class="web8">
    <img src="${data.image}" alt="">
    <h3>${data.name}</h3>
    <p>${data.description}</p>
</div>
    `
    })

    let Back=document.querySelector("#back");
Back.addEventListener("click", ()=>{
    window.location="./index.html"
})