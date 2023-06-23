var url = window.location.href;
var menuItems = document.querySelectorAll("nav ul li a");
menuItems.forEach(function (item) {
  if (item.href === url) {
    item.classList.add("active");
  }
});
