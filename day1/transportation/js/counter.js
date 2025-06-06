// Transportation JavaScript

$(document).ready(function(){

    console.log("js & doc loaded");

    $("#bus").click(function(){
        console.log("User chose the bus.")

        str = "The bus is free, and will get you to class in 25 minutes"

        $("#chosen-transport").append('<p>' + str + '</p>')
        
        

    });
    

    $("#drive").click(function() {
        console.log("User chose to drive.");
        
        str = "Your tank is almost empty, filling it will cost $60... The nearest station is 5 minutes away, and you're a 10 minute drive from campus."

        $("#chosen-transport").append('<p>' + str + '</p>')
        
        
    });

    $("#bike").click(function() {
        console.log("User chose to bike.");

        str = "The biking is free, and will get you to class in 30 minutes."

        $("#chosen-transport").append('<p>' + str + '</p>')
        
        
    });

});


