const inputBurger = $("[data-input='burgerName']");
const addBurgerBtn = $("#addToList");
const eatOnSaveBtn = $("#eatOnSave");
const eatBurgerBtn = $(".eatBurger");
const anotherOneBtn = $(".anotherOne");
const deleteBtn = $(".deleteSelected");
const emptyInputAlert = $("#emptyAlert");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then(reg => {
      console.log("Our service worker file is installed", reg);
    });
  });
}

// Add burger to list
addBurgerBtn.on("click", function(event) {
  event.preventDefault();
  if (inputBurger.val().replace(/ /g, "").length < 1) {
    emptyInputAlert.show();
    return false;
  }
  $.ajax({
    url: "/burgers",
    method: "POST",
    data: {
      "burger_name": inputBurger.val(),
      "devoured": false,
    },
  })
    .then(() => {
      location.reload();
    })
    .catch((error) => {
      alert("There was an error on POST request:", error)
    })
});

// Devour burger right on submit
eatOnSaveBtn.on("click", function(event) {
  event.preventDefault();
  if (inputBurger.val().replace(/ /g, "").length < 1) {
    emptyInputAlert.show();
    return false;
  }
  $.ajax({
    url: "/burgers",
    method: "POST",
    data: {
      "burger_name": inputBurger.val(),
      "devoured": true,
    },
  })
    .then(() => {
      location.reload();
    })
    .catch((error) => {
      alert("There was an error on POST request:", error)
    })
});

// Devour burger from list
eatBurgerBtn.on("click", function(event) {
  event.preventDefault();
  const data = {
    id: $(this).data("id"),
    devoured: true,
  };
  $.ajax({
    url: '/burgers',
    type: 'PUT',
    data,
  })
    .then(() => {
      location.reload();
    })
    .catch((error) => {
      alert("There was an error on PUT request:", error)
    })
})

// Get same burger again
anotherOneBtn.on("click", function(event) {
  event.preventDefault();
  const data = {
    id: $(this).data("id"),
    devoured: false,
  };
  $.ajax({
    url: '/burgers',
    type: 'PUT',
    data,
  })
    .then(() => {
      location.reload();
    })
    .catch((error) => {
      alert("There was an error on PUT request:", error)
    })
});

deleteBtn.on("click", function(event) {
  event.preventDefault();
  const data = {
    id: $(this).data("id")
  }
  $.ajax({
    url: '/burgers',
    type: 'DELETE',
    data,
  })
  .then(() => {
    location.reload();
  })
  .catch((error) => {
    alert("There was an error on DELETE request:", error)
  })
});