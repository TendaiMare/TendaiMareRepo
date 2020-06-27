let hamburgerButton = document.querySelector(".toggle-button");
let backdrop  = document.querySelector(".backdrop");
let mobileNav = document.querySelector(".mobile-nav");
let mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

backdrop.addEventListener("click",()=>{
    mobileNav.style.display="none";
    backdrop.style.display="none";
})

hamburgerButton.addEventListener("click",()=>{
    mobileNav.style.display="block";
    backdrop.style.display="block";
})


for (let i = 0 ; i < mobileNavLinks.length ; i++) {

    mobileNavLinks[i].addEventListener("click",()=>{
    mobileNav.style.display="none";
    backdrop.style.display="none";
})

}
