// Add any interactive JavaScript if needed
document.addEventListener("DOMContentLoaded", function() {
    // Example: Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

var  menubtn = document.getElementById("menubtn")
var  sidenav = document.getElementById("sidenav")
var  menu = document.getElementById("menu")

sidenav.style.right = "-250px";

menubtn.onclick = function(){
    if(sidenav.style.right == "-250px"){
        sidenav.style.right = "0";
        menu.src ="assets/menuclose.png"
    }
    else{
        sidenav.style.right = "-250px";
        menu.src ="assets/menuopen.png"
    }
}