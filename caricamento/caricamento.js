function simulateLoading() {
  var progressBar = document.querySelector(".progress-bar");
  var progressNumber = document.querySelector(".progress-number");
  var width = 0;
  var interval = setInterval(frame, 100);

  function frame() {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      progressBar.style.width = width + "%";
      progressNumber.textContent = width + "%";
    }
  }
}
