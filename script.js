const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");


// CURRENT YEAR
year.textContent = new Date().getFullYear();


// MOBILE NAVBAR
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


// CLOSE NAVBAR AFTER CLICKING A LINK
document
  .querySelectorAll(".nav-links a")
  .forEach((link) => {

    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });

  });


// SCROLL ANIMATION
const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }

      });

    },

    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    observer.observe(element);

  });