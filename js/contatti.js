var circleSizes = [
  {
    size: "small",
    image: "./icone/codepen.svg",
    link: "https://codepen.io/MargheritaFolegatti",
  },
  {
    size: "medium",
    image: "./icone/github.svg",
    link: "https://github.com/MargheritaFolegatti",
  },
  {
    size: "large",
    image: "./icone/instagram.svg",
    link: "https://instagram.com/margheritafolegatti",
  },
  {
    size: "extra.large",
    image: "./icone/linkedin.svg",
    link: "https://www.linkedin.com/in/margherita-folegatti/",
  },
  {
    size: "extra.small",
    image: "./icone/mail.svg",
    link: "mailto:marghefole02@gmail.com",
  },
];

var numCircles = 30;

for (var i = 0; i < numCircles; i++) {
  var circle = document.createElement("a");
  var randomSize = circleSizes[Math.floor(Math.random() * circleSizes.length)];

  circle.href = randomSize.link;

  circle.className = "circle " + randomSize.size;
  circle.style.top = Math.random() * 100 + "%";
  circle.style.left = Math.random() * 100 + "%";

  var image = document.createElement("img");
  image.src = randomSize.image;
  image.style.width = "100px";
  image.style.height = "100px";
  image.style.objectFit = "cover";

  circle.appendChild(image);
  document.body.appendChild(circle);
}

var circles = document.getElementsByClassName("circle");

for (var j = 0; j < circles.length; j++) {
  circles[j].addEventListener("mouseover", moveCircle);
  circles[j].addEventListener("mouseout", resetCircle);
}

function moveCircle() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var newX = Math.random() * (screenWidth - this.offsetWidth);
  var newY = Math.random() * (screenHeight - this.offsetHeight);

  this.style.transform = "translate(" + newX + "px, " + newY + "px)";
  this.classList.add("active");
}

function resetCircle() {
  this.style.transform = "translate(0, 0)";
  this.classList.remove("active");
}
