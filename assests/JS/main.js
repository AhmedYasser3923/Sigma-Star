//toggle Themes
let link = document.querySelectorAll("link");
let theme = document.querySelector(".Theme i");
theme.addEventListener(("click") , () => {
    if(theme.classList.contains("fa-moon")){
        link[1].href = "./assests/CSS/dark.css";
        theme.classList.replace("fa-moon" ,"fa-sun");
    }
    else{
        link[1].href = "./assests/CSS/main.css";
        theme.classList.replace("fa-sun","fa-moon");
    }
});
// open bar
let bars = document.querySelector(".bars");
let menu = document.querySelector(".nav-links");
let menu_ul = document.querySelector(".nav-links ul");
let bar = document.querySelector((".bars i"));
bars.addEventListener("click" , ()=>{
    if(menu.style.height == 0){
        menu.style.height = "auto";
        bar.classList.replace("fa-bars" , "fa-xmark");
    }
    else{
        menu.style.height = "";
        bar.classList.replace( "fa-xmark","fa-bars" );
    }
});
// active links

