// grab the dodger 
const dodger = document.getElementById("dodger");
// build our moveDodgerLeft() function, adding a check on the current position of the dodger 
// ensures that the dodger's left edge has not reached the left edge of its container.
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
// Now let's wire this up to our event listener
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);
    dodger.style.left =`${right + 1}px`;
    
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });