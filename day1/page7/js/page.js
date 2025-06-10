$(document).ready(function () {
    const statusData = JSON.parse(localStorage.getItem("imageStatus"));
  
    if (statusData) {
      const myImageMsg = statusData.myImage
        ? "You left the lamp on. Make sure you turn lights off before you leave the house."
        : "You turned off the lamp.";
  
      const darknessMsg = statusData.darkness
        ? "Good job! You turned the big light off."
        : "You left the big light on. Make sure you turn lights off before you leave the house.";
  
      const starlightMsg = statusData.starlight
        ? "You left the star lights on. Make sure you turn lights off before you leave the house."
        : "Good job! You turned the star lights off.";
  
      const laptopImageMsg = statusData.laptopImage
        ? "You left your laptop open. Make sure to close and power off your electronics before leaving."
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