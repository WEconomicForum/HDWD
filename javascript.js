const circles = document.querySelectorAll(".circle");
let selectedCount = 0;

circles.forEach((circle) => {
  circle.addEventListener("click", (event) => {
    const value = event.target.getAttribute("data-value");
    selectedCount = parseInt(value);
    circles.forEach((circle) => {
      circle.classList.remove("selected");
    });
    for (let i = 0; i < selectedCount; i++) {
      circles[i].classList.add("selected");
    }
  });
});

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const selectedText = "You selected " + selectedCount + "out of 5";
  const newWindow = window.open("", "_blank");
  newWindow.document.write("<h1>Thank you for your rating!</h1>");
  newWindow.document.write("<p>" + selectedText + "</p>");
});
