const title = document.querySelector(".title");
const imageWraps = [...document.querySelectorAll(".img-wrap")];
const subTitles = [...document.querySelectorAll("h2")];

const setItemActive = (entries) => {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};
const options = {
  rootMargin: "0px",
  threshold: 0.2,
};

const observer = new IntersectionObserver(setItemActive, options);
observer.observe(title);

imageWraps.map((item, index) => {
  item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpeg)`;
  index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
  observer.observe(item);
});

subTitles.map((title, index) => {
  index % 2 == 0 ? (title.style.left = "45%") : (title.style.left = "35%");
  observer.observe(title);
});
