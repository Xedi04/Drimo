
let Name = document.querySelector("#name");
let Description = document.querySelector("#des");
let Form = document.querySelector("#form");
let Fileimg = document.querySelector("#file");
let Sumbitbtn = document.querySelector("#submit");
let imgDiv = document.querySelector("#imgdiv");

Fileimg.addEventListener("input", (e)=>{
    let file=e.target.files[0];
    if(file){
        let reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=function(){
            imgDiv.src=reader.result;
        }
    }
})


Form.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {}
    let src = Fileimg.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        obj = {
            image: e.target.result,
            name: Name.value,
            description: Description.value
        }
        axios.post("http://localhost:3000/DRIMO", obj)
            .then(res =>window.location = "./index.html")
    }
    reader.readAsDataURL(src);
})


let Back=document.querySelector("#back");
Back.addEventListener("click", ()=>{
    window.location="./index.html"
})