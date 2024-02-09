var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.3 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.3
    ) {
      var currentId = section.attributes.id.value;

      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("nav-act", "nav-act-ba");
  });
};

var addActiveClass = function (id) {
  var navSelector = `nav a[href="#${id}"]`;
  document.querySelector(navSelector).classList.add("nav-act", "nav-act-ba");
};

const menuButton = document.getElementById("menu");
const menuList = document.getElementById("main-nav");
menuButton.addEventListener("click", () => {
  handleMenu();
});
function handleMenu() {
  menuButton.classList.toggle("is-act");
  menuList.classList.toggle("act");
}

document
  .querySelectorAll("[data-aos]")
  .forEach((el) => el.parentElement.classList.add("hideOverflowOn"));
