$(document).ready(function () {
  const statusData = JSON.parse(localStorage.getItem("imageStatus"));
  let statusHTML = "<ul>";

  if (statusData) {
    // MILK
    if (statusData.OatInCart) {
      statusHTML += "<li> Oat milk uses less water and produces fewer greenhouse emissions than dairy milk!</li>";
    } else if (statusData.WholeInCart) {
      statusHTML += "<li> Whole milk is significantly harmful to the environment and animals.</li>";
    }

    // PROTEIN
    if (statusData.TofuInCart) {
      statusHTML += "<li> Tofu is a better sustainable choice than meats.</li>";
    } else if (statusData.BeefInCart) {
      statusHTML += "<li> Beef is harmful to animals and the environment due to its land and water consumption.</li>";
    }

    // FRUIT
    if (statusData.OrangeInCart) {
      statusHTML += "<li> Fruits in netting bags, like the oranges, are often environmentally sustainable because the nets are compostable!</li>";
    } else if (
      statusData.StrawberryInCart ||
      statusData.GrapeInCart ||
      statusData.AppleInCart
    ) {
      statusHTML += "<li> Fruits in plastic, like the strawberries, grapes, and apples, are damaging to the environment and can often leach chemicals onto the fruits.</li>";
    }

    statusHTML += "</ul>";
    $("#statusList").html(statusHTML);
  } else {
    $("#statusList").text("No toggle status found.");
  }
});

// Replace message text
$("#replaceButton").on("click", function () {
  $("#message").text("This is how you got to class...");
});
