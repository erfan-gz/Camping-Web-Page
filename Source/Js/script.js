const sideMenu = document.querySelector(".side-menu")
const hamburgerMenu = document.querySelector(".hamburger-menu")
const arrowTopWrapper = document.querySelector(".arrow-top-wrapper")


hamburgerMenu.addEventListener("click", function() {
    if (sideMenu.style.transform === "translateY(0rem)") {
        sideMenu.style.transform = "translateX(-27rem)";
    }
    else {
        sideMenu.style.transform = "translateY(0rem)";

    }
    
})


arrowTopWrapper.addEventListener("click", function() {

        window.scrollTo({top: 0, behavior: 'smooth'})
})