const navbar = document.querySelector(".header");
const logo = document.getElementById("logo");
const scrollOffset = 5; // The number of pixels to scroll before making the navbar sticky

window.addEventListener("scroll", () => {
  if (window.innerWidth > 575) {
    // Only change the logo when the screen width is larger than 575px
    if (window.pageYOffset > scrollOffset) {
      navbar.classList.add("sticky");
      logo.src = "https://hunchhadigital.com/front/images/logo/logo-black.png"; // Change the logo source to black
    } else {
      navbar.classList.remove("sticky");
      logo.src = "https://hunchhadigital.com/front/images/logo/logo-white.png"; // Revert to the black logo source
    }
  } else {
    if (window.pageYOffset > scrollOffset) {
      navbar.classList.add("sticky");
      logo.src = "https://hunchhadigital.com/front/images/logo/logo-black.png"; // Change the logo source to black
    } else {
      navbar.classList.remove("sticky");
      logo.src = "https://hunchhadigital.com/front/images/logo/logo-black.png"; // Revert to the black logo source
    }
  }
});

function updateLogoSource() {
  if (window.innerWidth <= 575) {
    // Screen width is smaller than or equal to 575px (extra small screens)
    logo.src = "https://hunchhadigital.com/front/images/logo/logo-black.png"; // Set the logo source to black
  } else {
    // Screen width is larger than 575px
    logo.src = "https://hunchhadigital.com/front/images/logo/logo-white.png"; // Set the logo source to white
  }
}

// Call the updateLogoSource function when the page loads and when the window is resized
window.addEventListener("load", updateLogoSource);
window.addEventListener("resize", updateLogoSource);

// Initial call to set the logo source based on the screen width
updateLogoSource();

window.addEventListener("scroll", () => {
  if (window.pageYOffset > scrollOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Update the logo source when the window is resized
window.addEventListener("resize", updateLogoSource);
