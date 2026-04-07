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

    var mapElement = document.getElementById("map");

    if (mapElement) {
        var map = L.map('map').setView([40.4440, -79.9436], 15);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap'
        }).addTo(map);

        L.marker([40.4440, -79.9436]).addTo(map)
            .bindPopup("<b>MonoMuse Location</b><br>Pittsburgh, PA")
            .openPopup();
    }
});


function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const quantity = document.getElementById("quantity").value;

    if (name === "" || email === "" || quantity === "") {
        alert("Please fill out all fields.");
        return false;
    }

    if (quantity <= 0) {
        alert("Quantity must be at least 1.");
        return false;
    }

    return true;
}

function confirmPurchase() {
    alert("Your tickets have been added! Proceed to checkout.");
}

// AUTO PRICE CALCULATION
document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const totalDisplay = document.getElementById("total");

    if (quantityInput && totalDisplay) {
        quantityInput.addEventListener("input", function () {
            let quantity = parseInt(quantityInput.value) || 0;
            totalDisplay.innerText = quantity * 18;
        });
    }
});


// VALIDATION + REDIRECT
function handleCheckout() {
    const date = document.getElementById("date").value;
    const type = document.getElementById("ticketType").value;
    const quantity = document.getElementById("quantity").value;
    const email = document.getElementById("email").value;
    const zip = document.getElementById("zip").value;

    // REQUIRED CHECK
    if (!date || !type || !quantity || !email) {
        alert("Please fill out all required fields.");
        return false;
    }

    // EMAIL FORMAT CHECK
    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }

    // ZIP VALIDATION (OPTIONAL)
    if (zip !== "" && !/^\d{5}$/.test(zip)) {
        alert("Zip code must be 5 digits.");
        return false;
    }

    // SAVE TOTAL FOR CONFIRMATION PAGE
    localStorage.setItem("totalCost", quantity * 18);

    // REDIRECT
    window.location.href = "confirmation.html";
    return false;
}