"use strict";
let bar = document.getElementById("scrollbar"),
    totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let e = window.pageYOffset / totalHeight * 100,
        t = document.getElementById("info");
    bar.style.height = e + "%", t.innerHTML = Math.floor(e) + "%"
}, window.addEventListener("scroll", (function () {
    var e = document.getElementsByClassName("navbar")[0].style;
    this.scrollY > 20 ? (e.height = "10vh", e.backgroundColor = "#0e0e0e") : (e.height = "15vh", e.backgroundColor = "transparent"), document.getElementById("myContextMenu").classList.remove("active")
}));
let mouse = document.querySelector(".cursor"),
    zoomIn = document.querySelectorAll(".getZoom");

function cursor(e) {
    mouse.style.top = e.pageY + "px", mouse.style.left = e.pageX + "px"
}

function myFunction(e) {
    e.classList.toggle("change");
    var t = document.getElementsByClassName("lonely")[0];
    window.innerWidth <= 767 && t.classList.toggle("sticky")
}
window.addEventListener("mousemove", cursor), zoomIn.forEach(e => {
    e.addEventListener("mouseleave", () => {
        mouse.classList.remove("link-grow"), mouse.classList.remove("get-white")
    }), e.addEventListener("mouseover", () => {
        mouse.classList.add("link-grow"), mouse.classList.add("get-white")
    })
}), document.addEventListener("contextmenu", (function (e) {
    e.preventDefault();
    var t = document.getElementById("myContextMenu");
    t.style.top = e.pageY + "px", t.style.left = e.pageX + "px", t.classList.add("active")
})), window.addEventListener("click", (function () {
    document.getElementById("myContextMenu").classList.remove("active")
})), document.onkeydown = function (e) {
    return 123 != e.keyCode && (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0) ? 25156 == prompt("dasturchidan parolni oling va bu yerga kiriting") : (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) && (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && void 0)
};
var batterya = document.getElementById("battery");

function str() {
    document.getElementsByClassName("intro")[0].classList.toggle("noInt")
}
navigator.getBattery().then((function (e) {
    function t() {
        var t = Math.round(100 * e.level);
        t <= 25 && (batterya.style.background = "#f08c4a", batterya.style.border = "none"), batterya.innerHTML = t + "%"
    }
    t(), e.addEventListener("levelchange", t)
})), document.addEventListener("dblclick", () => {
    document.documentElement.requestFullscreen().catch(e => {
        console.log(e)
    })
});
var speed = document.getElementById("speed");
speed.oninput = function () {
    var e = mouse.style.transition = "0." + speed.value + "s";
    console.log(e)
};
var offIt = document.getElementById("switchOff");
offIt.onclick = function () {
    var e = document.getElementById("vol");
    e.play(), "off music" == this.innerHTML ? (this.innerHTML = "on music", e.pause()) : "on music" == this.innerHTML && (this.innerHTML = "off music", e.volume = 1, e.play())
};