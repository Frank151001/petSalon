$(document).ready(function() {
    // Activate scrollspy on the body element
    $('body').scrollspy({ target: '#navbar', offset: 100 });
  
    // Add smooth scrolling to all links inside the navbar
    $('#navbar a').on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== '') {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  
    // Add active class to the current section in the navbar
    $('#navbar ul li').on('activate.bs.scrollspy', function () {
      // Get the current section ID
      var currentSection = $(this).find('a').attr('href');
  
      // Remove the active class from all sections in the navbar
      $('#navbar ul li').removeClass('active');
  
      // Add the active class to the current section in the navbar
      $(this).addClass('active');
  
      // Get the parent section ID
      var parentSection = $(currentSection).closest('section').attr('id');
  
      // If the current section is a nested section
      if (parentSection !== undefined) {
        // Remove the active class from all parent sections in the navbar
        $('#navbar ul ul li').removeClass('active');
  
        // Add the active class to the parent section in the navbar
        $('#navbar ul ul').find('a[href="#' + parentSection + '"]').parent().addClass('active');
      }
    });
  });
  