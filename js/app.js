const ToggleMenu = document.querySelector('.menu-mobile')
const isOpen = document.querySelector('.sidenavbar')

ToggleMenu.addEventListener("click", () => {
   isOpen.classList.toggle('isOpen')
})
