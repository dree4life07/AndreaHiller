(function() {
    var html = document.querySelector("html");
    var burger = document.querySelector(".burger");
    burger.addEventListener("click", function() {
        html.classList.toggle("nav-active");
        /*if (("html").hasClass("nav-active")) {
            ("html").removeClass("nav-active").addClass("not-active");
        }
        else {
            ("html").addClass("nav-active");
        }*/
    });
})();
