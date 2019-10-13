$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0

        };
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Added new burger");
            location.reload();            
        });
    });
    $(".eaten").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        var eatenState = {
            devoured: 1
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenState
        }).then(function(){
            console.log("Yummy");
            location.reload();
            
        });
    });
});