
console.log("SCRIPT IS RUNNING"); // confirm script loads

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent page reload

  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message")
  };

  try {
    const res = await fetch("https://dr-kiran-api.vercel.app/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (result.success) {
      alert("Message sent!");
      form.reset(); // clear the form
    } else {
      alert("Error: " + (result.error || "Something went wrong"));
    }
  } catch (err) {
    alert("Error: " + err.message);
  }
});








