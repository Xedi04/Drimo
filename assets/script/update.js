let id=new URLSearchParams(window.location.search).get("id");
let Name=document.querySelector("#name");
let Fileimg=document.querySelector("#file");
let Description=document.querySelector("#des");
let imgDiv=document.querySelector("#imgdiv")
let Form=document.querySelector("#form");
let Sumbitbtn=document.querySelector("#submit");



fetch(`http://localhost:3000/DRIMO/${id}`)
.then(res=>res.json())
.then(data=>{
    console.log(data);
    imgDiv.src=data.image;
    Name.value=data.name;
    Description.value=data.description;
}).catch(error => console.error('Fetch Error:', error));

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

Form.addEventListener("submit", (e)=>{
e.preventDefault();
axios.put("http://localhost:3000/DRIMO/"+id, {
    image:imgDiv.src,
    name:Name.value, 
    description:Description.value
})
.then(res=>{
    window.location="./index.html"
}).catch(error => console.error('Axios Error:', error));
})

let Back=document.querySelector("#back");
Back.addEventListener("click", ()=>{
    window.location="./index.html"
})