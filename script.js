// NAV BAR

var nav = document.getElementById('main-nav');
var display = 0;
function hideShow()
{
  if(display == 1)
{
  nav.style.display = 'none';
  display = 0;
}
else {
  nav.style.display = 'block';
  display = 1;
}}

var menuClick = document.getElementById("menu-click");
function toggleIcon() {
if (menuClick.innerHTML == "✕") {
menuClick.innerHTML = "☰";
} else {
menuClick.innerHTML = "✕";
}}

// POST PRODUCTION

const filterButtons = document.querySelectorAll(".post-production-filter-buttons button")
const filterableCards = document.querySelectorAll(".post-production-filterable-cards .postproductioncard")

const filterCards  = e => {
  document.querySelector(".post-production-filter-active").classList.remove("post-production-filter-active");
  e.target.classList.add("post-production-filter-active")
  console.log(e.target);

  filterableCards.forEach(postproductioncard => {
    postproductioncard.classList.add("postproductionfilterhide");
    if(postproductioncard.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
      postproductioncard.classList.remove("postproductionfilterhide");
    }
  });
};

filterButtons.forEach(button => button.addEventListener("click", filterCards));