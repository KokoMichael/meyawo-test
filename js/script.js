let icon = document.querySelector(".bi-list");
let hamburger = document.querySelector(".hamburger");
let nav_link = document.querySelector(".nav-link");

hamburger.onclick = function(){
    icon.classList.toggle("bi-x-lg");
    nav_link.classList.toggle("cache");
};

window.addEventListener("scroll", ()=>{
   let nav = document.querySelector("nav");
   let logo = document.querySelector(".logo");
   let list = document.querySelectorAll(".link-list a");
   let components = document.querySelectorAll(".components a");


   let scrollPosition = window.scrollY;
   if(scrollPosition > 0)
   {
    nav.classList.add("scrolled");
    icon.style.color = "#695aa6";
    logo.style.color = "#695aa6";
    for(i =0;i<list.length;i++)
    {
      list[i].style.color = '#695aa6';
    }
   }else{
      nav.classList.remove("scrolled");
      icon.style.color = "#fff";
      logo.style.color = "#fff";
   }
})
