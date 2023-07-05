let nav1 = document.querySelector(".nav1");
let nav2 = document.querySelector(".navlink");
let link = document.querySelector(".navlink li");

nav1.addEventListener("click", function () {
    this.classList.toggle("click");
    nav2.classList.toggle("open")
})

var typed=new Typed(".input",{
    strings:["Frontend Developer","UX Designer","Web Developer"],
    typedSpeed:70,
    backSpeed:55,
    loop:true
})