let hamburgerButton = document.querySelector(".toggle-button");
let backdrop  = document.querySelector(".backdrop");
let mobileNav = document.querySelector(".mobile-nav");

backdrop.addEventListener("click",()=>{
    mobileNav.classList.remove("open");
    backdrop.classList.remove("open");
})

hamburgerButton.addEventListener("click",()=>{
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
})
