// Transportation JavaScript

$(document).ready(function(){

    console.log("js & doc loaded");

    $("#bus").click(function(){
        console.log("User chose the bus.")

        str = "The bus is free, and will get you to class in 25 minutes"

        $("#chosen-transport").append('<p>' + str + '</p>')
        
        const button = "<button id = rideBus> Take the bus to class </button>";
        $("#chosen-transport").append(button);
        $("#rideBus").click(function() {
            window.location.href = "INSERT LINK HERE"; //still need link to next page
        })
        

    });
    

    $("#drive").click(function() {
        console.log("User chose to drive.");
        
        str = "Your tank is almost empty, filling it will cost $30... The nearest station is 5 minutes away, and you're a 10 minute drive from campus."

        $("#chosen-transport").append('<p>' + str + '</p>')
        const button = "<button id = driveCar> Drive to class</button>";
        $("#chosen-transport").append(button);
        $("#driveCar").click(function() {
            window.location.href = "INSERT LINK HERE";//still need link to next page
        });
    });
        
    });

    $("#bike").click(function() {
        console.log("User chose to bike.");

        str = "Biking is free and will get you to class in 30 minutes."

        $("#chosen-transport").append('<p>' + str + '</p>')

        const button = "<button id = driveBike> Ride your Bike to class </button>";
        $("#chosen-transport").append(button);
        $("#driveBike").click(function() {
            window.location.href = "INSERT LINK HERE"; //still need link to next page
        })
        
        
    });


    $("#walk").click(function() {
        console.log("User chose to walk.");

        str = "Walking is free, and will get you to class in 45 minutes."

        $("#chosen-transport").append('<p>' + str + '</p>')

        const button = "<button id = driveWalk> Walk to class </button>";
        $("#chosen-transport").append(button);
        $("#driveWalk").click(function() {
            window.location.href = "INSERT LINK HERE"; //still need link to next page
        })
        
        
    });
