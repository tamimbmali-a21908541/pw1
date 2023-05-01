const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from buttons and contents
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add active class to the clicked button
    button.classList.add("active");

    // Show the associated tab content
    const targetContent = document.querySelector("#" + button.dataset.target);
    targetContent.classList.add("active");
  });
});
/*--------------------------------------------------------------------------------------*/
function toggleMenu() {
  const menuContainer = document.querySelector('.menu-container');
  menuContainer.classList.toggle('show');
}



