// Un-named function that runs itself immediately.
(function() {
    var html = document.querySelector("html");
    var burger = document.querySelector(".burger");
    burger.addEventListener("click", function() {
        // Toggle nav by toggling the nav-active CSS class on the document's <html> element.
        html.classList.toggle("nav-active");
    });
})();// <-- This is where it runs itself.