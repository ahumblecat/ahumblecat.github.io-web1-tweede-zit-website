document.addEventListener("DOMContentLoaded", function () {
	var hamburger = document.querySelector(".hamburger-icon");
	var menuLinks = document.querySelector(".menu-links");

	hamburger.addEventListener("click", function () {
		// Toggle the 'open' class on the menu links
		menuLinks.classList.toggle("open");

		// Toggle the 'open' class on the hamburger icon for animation
		hamburger.classList.toggle("open");
	});
});
