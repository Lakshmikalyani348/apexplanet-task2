// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Simple email pattern
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        // Check for empty fields
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Validate email format
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If everything is valid
        alert("Form submitted successfully!");
        form.reset(); // Clear form
    });
});
