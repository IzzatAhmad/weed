let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Increment the slide index
    slideIndex++;
// Reset to the first slide if the index exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    // Call this function again after 3 seconds
    setTimeout(showSlides, 3000);
}
// Initialize the slideshow
showSlides();


let progress = 0;
document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.getElementById("progress-bar");
  const increaseButton = document.getElementById("increase-progress");
  increaseButton.addEventListener("click", function () {
    if (progress < 100) {
      progress += 10; // Increase progress by 10%
      progressBar.style.width = progress + "%";
    } else {
      alert("Progress is complete!");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.getElementById("progress-bar");
  const increaseButton = document.getElementById("reset-progress");
  increaseButton.addEventListener("click", function () {
    alert("Progress is reset!");
    progress = 0;
    progressBar.style.width = progress + "%";
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const startButton = document.getElementById("animate-progress");
    let interval;

    startButton.addEventListener("click", function () {
      if (interval) return; // Prevent multiple intervals
      interval = setInterval(() => {
        if (progress >= 100) {
          clearInterval(interval);
          interval = null;
          alert("Download complete!");
        } else {
          progress += Math.floor(Math.random() * 10) + 1; // Simulate variable progress increments
          if (progress > 100) progress = 100; // Cap at 100%
          progressBar.style.width = progress + "%";
        }
      }, 300); // Update every 300ms
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const collapsibleButtons = document.querySelectorAll(".collapsible");

    collapsibleButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            content.classList.toggle("show");
        });
    });
});