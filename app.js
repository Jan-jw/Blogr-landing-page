
// eventlistener for all dropdowns -> desktop +mobile
document.querySelectorAll(".dropdown").forEach( e =>{
    e.addEventListener("click", e => {
        var svg = e.currentTarget.querySelector("svg");
        var block = e.currentTarget.querySelector("ul");
        console.log(e.currentTarget.parentElement);
        console.log(svg.getAttribute("transform"));
        if (svg.getAttribute("transform") === null || svg.getAttribute("transform") === "" ){
            svg.setAttribute("transform", "rotate(180)");
            block.style.display = "block";
        } else{
            svg.removeAttribute("transform");
            block.style.display = "none";
        }
    })
});


let hamburger = document.querySelector(".hamburger");
let cross = document.querySelector(".cross");
let hamMenu = document.querySelector(".mobile-menu");


hamburger.addEventListener("click", e =>{
    if (hamMenu.style.display === "none"|| hamMenu.style.display === ""){
        hamMenu.style.display = "flex";
        hamburger.style.display = "none";
        cross.style.display = "block";
    }
})

cross.addEventListener("click", e =>{
    if (hamMenu.style.display === "flex"){
        hamMenu.style.display = "none";
        cross.style.display = "none";
        hamburger.style.display = "block";
    }
})