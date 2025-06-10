function updateCartStorage(selectedKey) {
  const keys = [
    "OatInCart",
    "WholeInCart",
    "TofuInCart",
    "BeefInCart",
    "StrawberryInCart",
    "OrangeInCart",
    "AppleInCart",
    "GrapeInCart"
  ];

  const statusData = JSON.parse(localStorage.getItem("imageStatus")) || {};

  keys.forEach(key => {
    // Only one option per category should be true
    if (
      (["OatInCart", "WholeInCart"].includes(key) && ["OatInCart", "WholeInCart"].includes(selectedKey)) ||
      (["TofuInCart", "BeefInCart"].includes(key) && ["TofuInCart", "BeefInCart"].includes(selectedKey)) ||
      (["StrawberryInCart", "OrangeInCart", "AppleInCart", "GrapeInCart"].includes(key) &&
       ["StrawberryInCart", "OrangeInCart", "AppleInCart", "GrapeInCart"].includes(selectedKey))
    ) {
      statusData[key] = (key === selectedKey);
    }
  });

  localStorage.setItem("imageStatus", JSON.stringify(statusData));
}

// MILK
function toggleOatInCart() {
  $("#oat-in-cart").toggle();
  $("#oatmilk-button-img").hide();
  $("#wholemilk-button-img").hide();
  updateCartStorage("OatInCart");
}

function toggleWholeInCart() {
  $("#whole-in-cart").toggle();
  $("#wholemilk-button-img").hide();
  $("#oatmilk-button-img").hide();
  updateCartStorage("WholeInCart");
}

// PROTEIN
function toggleTofuInCart() {
  $("#tofu-in-cart").toggle();
  $("#tofuburger-button-img").hide();
  $("#beefburger-button-img").hide();
  updateCartStorage("TofuInCart");
}

function toggleBeefInCart() {
  $("#beef-in-cart").toggle();
  $("#beefburger-button-img").hide();
  $("#tofuburger-button-img").hide();
  updateCartStorage("BeefInCart");
}

// FRUIT
function toggleStrawberryInCart() {
  $("#strawberry-in-cart").toggle();
  $("#strawberries-button-img").hide();
  $("#orange-button-img").hide();
  $("#apple-button-img").hide();
  $("#grape-button-img").hide();
  updateCartStorage("StrawberryInCart");
}

function toggleOrangeInCart() {
  $("#orange-in-cart").toggle();
  $("#orange-button-img").hide();
  $("#strawberries-button-img").hide();
  $("#apple-button-img").hide();
  $("#grape-button-img").hide();
  updateCartStorage("OrangeInCart");
}

function toggleAppleInCart() {
  $("#apple-in-cart").toggle();
  $("#apple-button-img").hide();
  $("#strawberries-button-img").hide();
  $("#orange-button-img").hide();
  $("#grape-button-img").hide();
  updateCartStorage("AppleInCart");
}

function toggleGrapeInCart() {
  $("#grape-in-cart").toggle();
  $("#grape-button-img").hide();
  $("#strawberries-button-img").hide();
  $("#orange-button-img").hide();
  $("#apple-button-img").hide();
  updateCartStorage("GrapeInCart");
}
