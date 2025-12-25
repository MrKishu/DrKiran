

// Only load visual edit scripts when inside an iframe
        if (window.self !== window.top) {
          // Load debug monitor script
          var debugMonitorScript = document.createElement('script');
          debugMonitorScript.src = 'https://assets.emergent.sh/scripts/debug-monitor.js';
          document.head.appendChild(debugMonitorScript);
          // Configure Tailwind
          window.tailwind = window.tailwind || {};
          tailwind.config = {
            corePlugins: {
              preflight: false
            },
          };
          // Load Tailwind CDN
          var tailwindScript = document.createElement('script');
          tailwindScript.src = 'https://cdn.tailwindcss.com';
          document.head.appendChild(tailwindScript);
        }

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // stop page reload

  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message")
  };

  const res = await fetch("https://dr-kiran-api.vercel.app/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  if (result.success) {
    alert("Message sent!");
  } else {
    alert("Error: " + (result.error || "Something went wrong"));
  }
});





