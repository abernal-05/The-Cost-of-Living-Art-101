// Transportation JavaScript

$(document).ready(function(){

    console.log("js & doc loaded");

    $("#bus").click(function(){
        $("#chosen-transport").empty();
        console.log("User chose the bus.")

        str = "The bus is free with your student pass, and will get you to class in 25 minutes"

        $("#chosen-transport").append('<p>' + str + '</p>')
        
        const button = "<button id = rideBus> Take the bus to class </button>";
        $("#chosen-transport").append(button);
        $("#rideBus").click(function() {
            window.location.href = "../page5/bus-stop/index.html"; //still need link to next page
        })
        

    });
    

    $("#drive").click(function() {
        $("#chosen-transport").empty();
        console.log("User chose to drive.");
        
        str = "Your tank is almost empty, filling it will cost $30... The nearest station is 5 minutes away, and you're a 10 minute drive from campus."

        $("#chosen-transport").append('<p>' + str + '</p>')
        const button = "<button id = driveCar> Drive to class</button>";
        $("#chosen-transport").append(button);
        $("#driveCar").click(function() {
            window.location.href = "../page5/drive/index.html";//still need link to next page
        });
    });
        
    });

    $("#bike").click(function() {
        $("#chosen-transport").empty();
        console.log("User chose to bike.");

        str = "Biking is free and will get you to class in 30 minutes."

        $("#chosen-transport").append('<p>' + str + '</p>')

        const button = "<button id = driveBike> Ride your Bike to class </button>";
        $("#chosen-transport").append(button);
        $("#driveBike").click(function() {
            window.location.href = "../page5/garage/index.html"; //still need link to next page
        })
        
        
    });


    $("#walk").click(function() {
        $("#chosen-transport").empty();
        console.log("User chose to walk.");

        str = "Walking is free, and will get you to class in 45 minutes."

        $("#chosen-transport").append('<p>' + str + '</p>')

        const button = "<button id = driveWalk> Walk to class </button>";
        $("#chosen-transport").append(button);
        $("#driveWalk").click(function() {
            window.location.href = "../page5/walk/index.html"; //still need link to next page
        })
        
        
    });
    
    const STORAGE_KEY = 'todoListState';
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    
    checkboxes.forEach(checkbox => {
      const id = checkbox.dataset.id;
      if (saved[id]) checkbox.checked = true;
    
      checkbox.addEventListener('change', () => {
        saved[id] = checkbox.checked;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
      });
    });
    
