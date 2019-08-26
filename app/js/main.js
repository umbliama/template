function main() {
  openHeaderMenu();
}

function openHeaderMenu() {
  let headerMenu = document.querySelector(".header__btn");

  headerMenu.addEventListener("click", function() {
    if (headerMenu.classList.contains("active")) {
      headerMenu.classList.remove("active");
    } else {
      headerMenu.classList.add("active");
    }
  });
}

main();
