const container = document.querySelector(".container");
const choices = document.querySelector(".choices");

const handleSelect = function (event) {
  const targetElement = event.target; 

  if (targetElement.closest("div")) {
    const selectedDiv = targetElement.closest(".container > div");
    // Toggle selected class
    selectedDiv.classList.toggle("selected");
    const selectedElements = document.querySelectorAll(
      ".container > div.selected"
    );
    // Clear previous choices
    choices.innerHTML = "";
    // Add selected choices to the choices container
    selectedElements.forEach((element) => {
      //clone the selected element
      const clone = element.cloneNode(true);
      choices.appendChild(clone);
    });
  }
};

container.addEventListener("click", handleSelect, false);
