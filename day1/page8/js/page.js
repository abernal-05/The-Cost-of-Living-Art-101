$(document).ready(function () {
    const statusData = JSON.parse(localStorage.getItem("imageStatus"));
  
    if (statusData) {
      const driveWalkMsg = statusData.driveWalk
        ? "Good job, you walked to class! Walking decreases carbon footprint."
        : "Good job, you walked to class! Walking decreases carbon footprint.";
  
      const driveCarMsg = statusData.driveCar
        ? "You chose to drive. Driving can be harmful to th environment due to its emission rates."
        : "You chose to drive. Driving can be harmful to th environment due to its emission rates.";
  
      const driveBikeMsg = statusData.driveBike
        ? "Good job! You chose to bike, which helped you get to class faster and reduced your carbon footprint."
        : "Good job! You chose to bike, which helped you get to class faster and reduced your carbon footprint.";
  
      const rideBusMsg = statusData.rideBus
        ? "You chose to take the bus. The bus can be a better option than driving a car, but it still emits pollution."
        : "You chose to take the bus. The bus can be a better option than driving a car, but it still emits pollution.";
  
      const statusHTML = `
        <ul>
          <li>${driveWalkMsg}</li>
          <li>${driveCarMsg}</li>
          <li>${driveWalkMsg}</li>
          <li>${rideBusMsg}</li>
        </ul>
      `;
  
      $("#statusList").html(statusHTML);
    } else {
      $("#statusList").text("No toggle status found.");
    }
  });

  $("#replaceButton").on("click", function () {
    $("#message").text("This is how you got to class...");
  });