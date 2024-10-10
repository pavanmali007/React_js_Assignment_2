$(document).ready(function() {


    // que1
    // Function to validate email format
    function isValidEmail(email) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }

    // Handle form submission
    $('#myForm').submit(function(event) {
        // Prevent form submission
        event.preventDefault();

        // Get the values from the fields
        let name = $('#name').val();
        let email = $('#email').val();

        // Simple validation
        if (name === '') {
            alert('Please enter your name.');
            return;
        }

        if (email === '') {
            alert('Please enter your email.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Display form data in alert if validation passes
        alert('Form Data:\nName: ' + name + '\nEmail: ' + email);

    });


    // que2
    // Cities data object
    var cities = {
        'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara'],
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
        'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur']
    };

    // When a state is selected
    $('#state').change(function() {
        var selectedState = $(this).val();
        var cityOptions = '<option value="">Select City</option>'; // Default option

        if (selectedState) {
            // Loop through cities array of the selected state
            cities[selectedState].forEach(function(city) {
                cityOptions += '<option value="' + city + '">' + city + '</option>';
            });
        }

        // Update the city dropdown
        $('#city').html(cityOptions);
    });

        
        // que3
        // When the button is clicked toggle div visibility
        $('#toggleButton').click(function() {
            // Toggle the visibility of the div
            $('#myDiv').toggle();
        });

       
        // que4
            var currentImageIndex = 0;
            var images = $('#slider img');
            var totalImages = images.length;
        
            // Function to show the image at the current index
            function showImage(index) {
                images.removeClass('active').hide();
                images.eq(index).addClass('active').fadeIn();
            }
        
            // Next button click event
            $('#nextBtn').click(function() {
                currentImageIndex = (currentImageIndex + 1) % totalImages;
                showImage(currentImageIndex);
            });
        
            // Previous button click event
            $('#prevBtn').click(function() {
                currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
                showImage(currentImageIndex);
            });
        



        // que5
            // Handle form submission
            $('#simpleSubmitBtn').click(function(event) {
                // Prevent form submission
                event.preventDefault();
        
                // Clear any previous error message
                $('#simpleNameError').text('');
        
                // Get the value of the name input field
                let name = $('#simpleName').val();
        
                // Check if the name field is empty
                if (name === '') {
                    // Display the error message if the field is empty
                    $('#simpleNameError').text('Please enter your name.');
                } else {
                    // If validation passes, proceed (for this example, we'll just show an alert)
                    alert('Form submitted successfully!');
                }
            });
        

});


