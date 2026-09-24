const API_URL = "https://my-portfolio-4v30.onrender.com/api/contact";

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = form.querySelector("button");
  btn.disabled = true;
  btn.textContent = "Sending...";

  const data = Object.fromEntries(new FormData(form).entries());

  try {
    const res = await axios.post(API_URL, data);

    if (res.data.success) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ " + res.data.message);
    }
  } catch (error) {
    console.error(error);
    alert("⚠️ Something went wrong. Please try again.");
  } finally {
    btn.disabled = false;
    btn.textContent = "Send Message";
  }
});

const button = document.querySelector(".theme-btn");
button.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  button.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});