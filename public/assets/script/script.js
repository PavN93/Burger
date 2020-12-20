const inputBurger = $("[data-input='burgerName']")
const addBurgerBtn = $("#addToList");
const eatOnSaveBtn = $("#eatOnSave");
const eatBurgerBtn = $("#eatBurger");
const deleteFromList = $("#deleteFromList");
const deleteDevoured = $("#deleteDevoured");

addBurgerBtn.on("click", function(event) {
  event.preventDefault();
  console.log("this:", this, "input:", inputBurger.val());
  
})