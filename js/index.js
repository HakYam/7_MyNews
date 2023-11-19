// navbar scroll
var navbar = document.getElementById('navbar');

// Initialize the last scroll position
var lastScrollTop = 0;

// Add a scroll event listener to window
window.addEventListener("scroll", function() {
   // Get the current scroll position
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

   // Determine if we're scrolling up or down
   if (currentScroll > lastScrollTop) {
       // Scrolling down, hide the navbar
       navbar.style.top = "-80px"; // Adjust the value to the height of your navbar
   } else {
       // Scrolling up, show the navbar
       navbar.style.top = "0";
   }

   // Update the last scroll position to the current scroll
   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);


const year = new Date().getFullYear();
document.getElementById("year").innerHTML = year

