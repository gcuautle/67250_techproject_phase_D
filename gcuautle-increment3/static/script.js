function SumnPrint(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
var x=5
var y=7 
var z =x+y 
console.log(z);

A = "hello "
B = "Wolrd!"
var C = A+B
console.log(C);


SumnPrint(x,y);
console.log(C)

if (C.length > z) {
    console.log(C)

    if (C.length < z) {
        console.log(z)
    }
    // End of nested check block
} else if (C.length<z){
    console.log(z)
} else{
    console.log("good job!")
}

var L1 = ["Watermelon","Pineapple","Pear","Banana"];
var L2 = ["Apple","Banana","Kiwi","Orange"];

function findtheBanana(arr){
    arr.forEach(function(fruit){
        if (fruit==="Banana"){
            alert("Banana found!")
        }
    });
}

findtheBanana(L1)
findtheBanana(L2)

var now= new Date();
var hour= now.getHours();

function greeting(h) {
    var greetingElement = document.getElementById("greeting");

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