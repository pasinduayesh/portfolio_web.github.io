$(document).ready(function () {
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });
});


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
 
  // Define an array of roles
  const roles = ["Frontend Developer", "Backend Developer", "Graphic Designer"];
  let index = 0;

  // Function to update the role text
  function updateRole() {
      // Get the element by its id
      const roleElement = document.getElementById("role");
      // Update the text content with the current role
      roleElement.textContent = roles[index];
      // Increment index for the next role (cyclic)
      index = (index + 1) % roles.length;
  }

  // Call the updateRole function periodically (every 3 seconds in this example)
  setInterval(updateRole, 3000);

  