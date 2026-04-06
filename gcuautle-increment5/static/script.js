function ActiveNav() { 
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        if (currentPage === linkPage) {
            link.classList.add("active");
        }
    });
}
ActiveNav();


var now= new Date();
var hour= now.getHours();

function greeting(h) {
    var greetingElement = document.getElementById("greeting");

    if (!greetingElement) return; // prevents errors

    if (h < 5 || h >= 20) {
        greetingElement.innerHTML = "Good night";
    } else if (h < 12) {
        greetingElement.innerHTML = "Good morning";
    } else if (h < 18) {
        greetingElement.innerHTML = "Good afternoon";
    } else {
        greetingElement.innerHTML = "Good evening";
    }
}


greeting(hour);



function addYear() {
    var currentYear = new Date().getFullYear();

    var yearElement = document.getElementById("copyYear");

    if (yearElement) {
        yearElement.innerHTML = currentYear;
    }
}

addYear();

// jQuery Read More / Read Less

$(document).ready(function(){

  $("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
  });

  $("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
  });

});

function showForm(date) {
    // Show form
    document.getElementById("ticketForm").style.display = "block";

    // Put selected date into form
    document.getElementById("selectedDate").value = date;
}

function submitForm() {
    alert("Redirecting to payment system.");
}

function toggleMenu() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("responsive");
}



document.addEventListener("DOMContentLoaded", function () {

    var map = L.map('map').setView([40.4440, -79.9436], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    L.marker([40.4440, -79.9436]).addTo(map)
        .bindPopup("<b>MonoMuse Location</b><br>Pittsburgh, PA")
        .openPopup();
});
