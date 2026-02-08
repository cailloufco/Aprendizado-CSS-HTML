const menuHamburger = document.getElementById("menuHamburger");
function ligarMenu() {
  console.log("clicou");
  if (menuHamburger.style.display == "block") {
    return (menuHamburger.style.display = "none");
  } else {
    return (menuHamburger.style.display = "block");
  }
}
