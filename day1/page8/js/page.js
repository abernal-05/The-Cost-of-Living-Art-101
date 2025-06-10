$(document).ready(function () {
    const statusData = JSON.parse(localStorage.getItem("imageStatus"));
  
    if (statusData) {
      const myImageMsg = statusData.myImage
        ? "Good job, you walked to class! Walking decreases carbon footprint."
        : "Good job, you walked to class! Walking decreases carbon footprint.";
  
      const darknessMsg = statusData.darkness
        ? "You chose to drive. Driving can be harmful to th environment due to its emission rates."
        : "You chose to drive. Driving can be harmful to th environment due to its emission rates.";
  
      const starlightMsg = statusData.starlight
        ? "Good job! You chose to bike, which helped you get to class faster and reduced your carbon footprint."
        : "Good job! You chose to bike, which helped you get to class faster and reduced your carbon footprint.";
  
      const laptopImageMsg = statusData.laptopImage
        ? "You chose to take the bus. The bus can be a better option than driving a car, "
        : "Good job! You closed your laptop.";
  
      const statusHTML = `
        <ul>
          <li>${myImageMsg}</li>
          <li>${darknessMsg}</li>
          <li>${starlightMsg}</li>
          <li>${laptopImageMsg}</li>
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