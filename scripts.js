$(".menu-toggle").on("click", function(event) {
    event.preventDefault();
    $(".menu").toggleClass("hidden");
})