// On CLick function
$(function () {
  $(".changeBurger").on("click", function (event) {
    var id = $(this).data("id");
    var devouredburger = $(this).data("devouredburger");
    var newDevouredBurger = {
      devoured: devouredburger
    };

    // AJAX PUT request & Reloads the page
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredBurger
    }).then(
      function () {
        location.reload();
      }
    );
  });
  
  // On Click function that creates a burger // preventDefault on a submit event
  $("#typeOfBurger").on("click", function (event) {
    event.preventDefault();

    // New Added Burger
    var burgerAdded = {
      name: $("#newBurgerAdded").val().trim(),
      devoured: false
    };

    // AJAX POST request & Reloads the page
    $.ajax("/api/burgers", {
      type: "POST",
      data: burgerAdded
    }).then(
      function () {
        location.reload();
      }
    )
  })
});