
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form");
        const messageDiv = document.querySelector(".message");

        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting

            const emailInput = document.querySelector("input[type='email']");
            const enteredEmail = emailInput.value;

            if (enteredEmail) {
                // Display a success message
                messageDiv.textContent = `Thank you! Your email address ${enteredEmail} has been added to our mailing list!`;
            } else {
                // Display an error message
                messageDiv.textContent = "Please enter a valid email address.";
            }
        });
    });
