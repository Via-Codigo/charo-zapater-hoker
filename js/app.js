/**
 * cambiando tamaño de menu
 */
function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 200,
    minWidth = 767;
  menuPrincipal = document.getElementById("menuPrincipal");

  if (distanceY > shrinkOn || window.screen.width <= minWidth) {
    menuPrincipal.classList.add("solid");
  } else {
    menuPrincipal.classList.remove("solid");
  }
}

window.addEventListener("scroll", resizeHeaderOnScroll);
