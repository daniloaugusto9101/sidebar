let btn = document.querySelectorAll(".sub-btn");
let subMenu = document.querySelectorAll(".sub-menu");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", ()=>{
        // console.log("Clicado...");
        subMenu[i].classList.toggle("active");
    });    
}