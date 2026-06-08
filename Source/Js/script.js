const sideMenu = document.querySelector(".side-menu")
const hamburgerMenu = document.querySelector(".hamburger-menu")


hamburgerMenu.addEventListener("click", function() {
    if (sideMenu.style.transform === "translateY(0rem)") {
        sideMenu.style.transform = "translateY(-70vh)";
    }
    else {
        sideMenu.style.transform = "translateY(0rem)";

    }
    
})