// Starting build out of from interaction & countdown logic.

//Form drop down
const select = document.querySelector(".form__select");
const dropdown = document.querySelector(".form__select-dropdown");
const option = document.querySelector(".form__select--option");

document.addEventListener("click", (e) => {
  if (e.target == select) {
    console.log("Select Clicked!");
    dropdown.classList.add("show");
  } else dropdown.classList.remove("show");

  if (e.target.className == "form__select--option") {
    // select.innerHTML = e.target.innerHTML;
    console.dir(e.target);
  }
});
