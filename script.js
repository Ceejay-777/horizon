document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-mobile").classList.remove("disappear");
    document.querySelector(".nav-mobile").classList.remove("hidden");
    document.querySelector(".nav-mobile").classList.add("appear");
});

document.querySelector(".mobile-cancle").addEventListener("click", function() {
    document.querySelector(".nav-mobile").classList.add("disappear");
});
