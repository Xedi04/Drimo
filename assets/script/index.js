let ourAll=document.querySelector(".our-cloud");
let Load=document.querySelector("#load");
let page=4


function showData(){
fetch("http://localhost:3000/DRIMO")
.then(res=>res.json())
.then(data=>{
    data.slice(page-4,page).forEach(element => {
        ourAll.innerHTML+=`
        <div class="web8">
                        <img src="${element.image}" alt="">
                        <h3>${element.name}</h3>
                        <p>${element.description}</p>
                        <button id="delete" onclick="Deletebox(${element.id})">Delete</button>
                        <button id="update"><a href="./update.html?id=${element.id}">Update</a></button>
                        <button id="add"><a href="./add.html">Add</a></button>
                        <button id="getall" onclick="GoDetails(${element.id})">GetAll</button>
                        <button id="favorite" onclick="addFavorite(${element.id})">Favorite</button>
                    </div>
        `
    });
})
}
showData();

Load.addEventListener("click",()=>{
    page+=4
    showData();
})

function Deletebox(id){
    axios.delete(`http://localhost:3000/DRIMO/${id}`)
    .then(res=>{
        window.location.reload()
    })
}

function GoDetails(id){
    window.location=`./details.html?id=${id}`
}


function addFavorite(id){
axios.get(`http://localhost:3000/DRIMO/${id}`)
.then(res=>{
    axios.post("http://localhost:3000/FAVORITES/", res.data)
    window.location="./favorites.html"
})
}


//MENU 

let Menu=document.querySelector(".menu");
let List=document.querySelector("#list");

List.addEventListener("click", ()=>{
    if(Menu.style.display=="flex"){
        Menu.style.display="none"
    }else{
        Menu.style.display="flex"
    }
})

let navbar=document.querySelector("#nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 85) {
        navbar.style.transition = "all 1s ease";
        navbar.style.position = "fixed";
    } else {
        navbar.style.position = "static";
        navbar.style.transition = "none"; 
    }
});


