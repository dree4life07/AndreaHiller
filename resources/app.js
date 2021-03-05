let menuToggle = (function() {
    var html = document.querySelector("html");
    var burger = document.querySelector(".burger");
    var links = document.querySelector(".nav-links");
    burger.addEventListener("click", () => {
        html.classList.toggle("nav-active");
    }),
    links.addEventListener("click", () => {
        html.classList.toggle("nav-active");
    });
})
menuToggle();

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 768);
});

window.addEventListener("scroll", () => {
    let menuArea = document.getElementById('nav-shimmy');

    if(window.pageYOffset > 20){
        menuArea.classList.add("cus-nav");
    }else{
        menuArea.classList.remove("cus-nav")
    }
});




/*if (("html").hasClass("nav-active")) {
            ("html").removeClass("nav-active").addClass("not-active");
        }
        else {
            ("html").addClass("nav-active");
        }*/