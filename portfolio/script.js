const navToggle = document.getElementsByClassName("listnav")[0];

const isExpanded = navToggle.getAttribute("data-expanded");

function navToogler() {
  if (isExpanded === "false") {
    navToggle.setAttribute("data-expanded", "true");
  } else {
    navToggle.setAttribute("data-expanded", "false");
  }
}