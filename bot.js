"use strict";

document.querySelector(".showBot").addEventListener("click", function(){
    document.querySelector(".Box").classList.remove("hidden");
    document.querySelector(".showBot").classList.add("hidden");
});

document.querySelector(".hideBot").addEventListener("click", function(){
    document.querySelector(".Box").classList.add("hidden");
    document.querySelector(".showBot").classList.remove("hidden");
});
