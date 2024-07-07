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