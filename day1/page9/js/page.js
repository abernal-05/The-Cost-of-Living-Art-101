$(document).ready(function () {
    const statusData = JSON.parse(localStorage.getItem("imageStatus"));
  
    if (statusData) {
      const OatInCartMsg = statusData.OatInCart
        ? "Oat milk uses less water and produces fewer greenhouse emissions than dairy milk!"
        : "Oat milk uses less water and produces fewer greenhouse emissions than dairy milk!";
  
      const WholeInCartMsg = statusData.WholeInCart
        ? "Whole milk is significantly harmful to the enviroment and animals. "
        : "Whole milk is significantly harmful to the enviroment and animals. ";
  
      const TofuInCartMsg = statusData.TofuInCart
        ? "Tofu is a better sustainable choice than meats."
        : "Tofu is a better sustainable choice than meats.";
  
      const BeefInCartMsg = statusData.TofuInCart
        ? "Beef is harmful to animals and the environment due to its land and water consumption."
        : "Beef is harmful to animals and the environment due to its land and water consumption.";

        const StrawberryInCartMsg = statusData.StrawberryInCart
        ? "Fruits in plastic, like the strawberries, grapes, and apples, are damanging to the environment and can often leach chemicals onto the fruits."
        : "Fruits in plastic, like the strawberries, grapes, and apples, are damanging to the environment and can often leach chemicals onto the fruits.";

        const OrangeInCartMsg = statusData.OrangeInCart
        ? "Fruits in netting bags, like the oranges, are often environmentally sustainable because the nets are compostable!"
        : "Fruits in netting bags, like the organges, are often environmentally sustainable because the nets are compostable!";


      const statusHTML = `
        <ul>
          <li>${OatInCartMsg}</li>
          <li>${WholeInCartMsg}</li>
          <li>${TofuInCartMsg}</li>
          <li>${StrawberryInCartMsg}</li>
          <li>${OrangeInCartMsg}</li>
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