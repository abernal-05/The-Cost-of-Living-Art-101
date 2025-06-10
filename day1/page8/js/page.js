$(document).ready(function () {
    const statusData = JSON.parse(localStorage.getItem("imageStatus"));
  
    const statusMessages = [];

if (statusData.driveWalk) {
  statusMessages.push("Good job, you walked to class! Walking decreases carbon footprint.");
}
if (statusData.driveCar) {
  statusMessages.push("You chose to drive. Driving can be harmful to the environment due to its emission rates.");
}
if (statusData.driveBike) {
  statusMessages.push("Good job! You chose to bike, which helped you get to class faster and reduced your carbon footprint.");
}
if (statusData.rideBus) {
  statusMessages.push("You chose to take the bus. The bus can be a better option than driving a car, but it still emits pollution.");
}

if (statusMessages.length > 0) {
  const statusHTML = "<ul>" + statusMessages.map(msg => `<li>${msg}</li>`).join("") + "</ul>";
  $("#statusList").html(statusHTML);
} else {
  $("#statusList").text("No transport method selected.");
}
})

  $("#replaceButton").on("click", function () {
    $("#message").text("This is how you got to class...");
  });