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

const readMoreBtns = document.querySelectorAll('.read-more');
        const modals = document.querySelectorAll('.modal');
        const closeBtns = document.querySelectorAll('.close');

        readMoreBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const targetModal = document.getElementById(this.getAttribute('data-target'));
                targetModal.style.display = 'block';
            });
        });

        closeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const targetModal = document.getElementById(this.getAttribute('data-target'));
                targetModal.style.animation = 'fadeOut 0.5s ease-in-out, slideOut 0.5s ease-in-out';
                setTimeout(() => {
                    targetModal.style.display = 'none';
                    targetModal.style.animation = ''; // Reset the animation
                }, 500);
            });
        });

        window.addEventListener('click', function(event) {
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.animation = 'fadeOut 0.5s ease-in-out, slideOut 0.5s ease-in-out';
                    setTimeout(() => {
                        modal.style.display = 'none';
                        modal.style.animation = ''; // Reset the animation
                    }, 500);
                }
            });
        });