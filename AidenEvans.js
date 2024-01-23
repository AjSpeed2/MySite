
sessionStorage.setItem("active", "false");
let active = sessionStorage.getItem("active");
if (!active) {
  window.scrollTo(0, 0);
  active = true;
  sessionStorage.setItem("active", true);
}

