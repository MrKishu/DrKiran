// ===============================
// Disable inspect and right-click
// ===============================

// Disable right-click menu
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener("keydown", function (e) {

  // Block F12
  if (e.key === "F12") {
    e.preventDefault();
  }

  // Block Ctrl+Shift+I and Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) {
    e.preventDefault();
  }

  // Block Ctrl+U (view source)
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
  }
});

// ===============================
// Contact Form Submission Handler
// ===============================

console.log("SCRIPT IS RUNNING"); // Helps confirm script loads

// Get the form element from HTML
const form = document.getElementById("contact-form");

// Listen for submit event
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Stop page refresh

  // Collect form data
  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message")
  };

  try {
    // Send data to your backend API
    const res = await fetch("https://dr-kiran-api.vercel.app/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    // If backend returns success = true
    if (result.success) {
      alert("Message sent!");
      form.reset(); // Clear form fields
    } else {
      alert("Error: " + (result.error || "Something went wrong"));
    }
  } catch (err) {
    // Handles network or backend failure
    alert("Error: " + err.message);
  }
});









