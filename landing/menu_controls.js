//I still dont want to use libraries for landings

var burger = document.getElementById("header-burger-icon");
var burger_menu = document.getElementById("burger-menu");

function toggleBurger () {
	burger_menu.classList.toggle("open");
}

burger.onclick = toggleBurger;