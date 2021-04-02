// Data and configs
let steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
let minStep = 1;
let maxStep = steps.length;
let activeStep = 1;

// Get elements of DOM
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const progressbar = document.querySelector(".progressbar");

// Add event listener to buttons
previous.addEventListener("click", onPreviousClick);
next.addEventListener("click", onNextClick);

// Functions
function onPreviousClick() {
  activeStep = activeStep - 1;
  render();
}

function onNextClick() {
  activeStep = activeStep + 1;
  render();
}

function checkButtonState() {
  next.disabled = false;
  previous.disabled = false;

  if (activeStep === maxStep) {
    next.disabled = true;
  }

  if (activeStep === minStep) {
    previous.disabled = true;
  }
}

function render() {
  progressbar.innerHTML = "";

  steps.map((step) => {
    let pos = steps.indexOf(step) + 1;
    let isActive = activeStep === pos ? "active" : "inactive";
    let isComplete = activeStep > pos ? "complete" : "incomplete";

    let stepElement = `
      <li 
        data-step=${pos} 
        class="step ${isActive} ${isComplete}"
      >${step}</li>
    `;

    progressbar.innerHTML += stepElement;
  });

  checkButtonState();
}

// Render the progressbar
render();
