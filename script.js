function toggleTheme() {
  document.body.classList.toggle("dark");
}

/* Contact form */
function sendMessage(e) {
  e.preventDefault();
  alert("Message Sent Successfully!");
}

/* Scroll animation */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 300;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "1s";
});
