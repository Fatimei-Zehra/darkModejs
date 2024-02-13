

let darkMode = document.getElementById("mode");
let darkItems=document.querySelector(".social-network-items");
let checkBox=document.querySelector(".span")
let body=document.body;

darkMode.addEventListener("click", function(){
    darkMode.classList.toggle("active");

    if(darkMode.classList.contains("active")){
        body.classList.toggle("dark-mode");
        darkItems.classList.toggle("dark-items");
        checkBox.classList.toggle("check");
    }

    else if (!darkMode.classList.contains("active")) {
        body.classList.remove("dark-mode");
        darkItems.classList.remove("dark-items");
        checkBox.classList.remove("check");
    }

});





