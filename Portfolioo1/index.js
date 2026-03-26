const para = document.querySelector(".intro-section");

para.addEventListener("click", function () {
  alert("Welcome My name is Shreesh K.C.");
});

// ── Email Validator

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();

  if (!isValidEmail(email)) {
    alert(
      "Invalid email! Please enter a valid email address.\nExample: name@example.com",
    );
    return;
  }

  const btn = document.querySelector(".submit-btn");

  btn.addEventListener("click", function () {
    alert("Message sent!");
  });

  //   alert("Email looks good! ✓");
});

function isValidEmail(email) {
  // Checks for pattern:  something @ something . something
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
