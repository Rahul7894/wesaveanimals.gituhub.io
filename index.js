// Smooth scrolling
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    );
  });
  
  // Form submission
$('form').on('submit', function(e) {
    e.preventDefault();
  
    // Collect form data
    var formData = $(this).serialize();
  
    // Send form data to server
    $.ajax({
      url: '/submit-form.php',
      type: 'post',
      data: formData,
      success: function(response) {
        // Display success message to user
        alert('Thank you for submitting the form!');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        // Display error message to user
        alert('An error occurred while submitting the form.');
      }
    });
  });
  