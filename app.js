// top-nav dropdowns click events

const dropdownToggle = (e) =>{
    // e.getElement
}

// eventlistener for all dropdowns - desktop
document.querySelectorAll(".dropdown").forEach( e =>{
    e.addEventListener("click", (e) =>{
        //flip svg + toggle block
        // console.log(e.currentTarget);

        var svg = e.currentTarget.querySelector("svg");
        var block = e.currentTarget.querySelector("ul");
        console.log(block);
        console.log(svg.getAttribute("transform"));
        // svg.setAttribute("transform", "rotate(180)");
        if (svg.getAttribute("transform") === null || svg.getAttribute("transform") === "" ){
            svg.setAttribute("transform", "rotate(180)");
            block.style.display = "block";
        } else{
            svg.removeAttribute("transform");
            block.style.display = "none";
        }

    })
}
)

let hamburger = document.querySelector(".hamburger");
let cross = document.querySelector(".cross");
let hamMenu = document.querySelector(".mobile-menu");
// console.log(hamburger);
// eventlistener for hamburger - mobile
hamburger.addEventListener("click", e =>{
    // let hamMenu = document.querySelector(".mobile-menu");
    // console.log(hamMenu.style.display);

    if (hamMenu.style.display === "none"|| hamMenu.style.display === ""){
        // console.log("in")
        hamMenu.style.display = "flex";
        hamburger.style.display = "none";
        cross.style.display = "block";
        // console.log(hamMenu.style.display);
    }
})

cross.addEventListener("click", e =>{
    // let hamMenu = document.querySelector(".mobile-menu");
    if (hamMenu.style.display === "flex"){
        hamMenu.style.display = "none";
        cross.style.display = "none";
        hamburger.style.display = "block";
    }
})