const toggleBtn = document.querySelector('.toggle')
const nav = document.querySelector('.nav')
const navList = document.querySelector('.nav-list')
const navItems = document.querySelector('.nav-item')

toggleBtn.addEventListener('click', switchMenu)
navItems.forEach(el => el.addEventListener('click', closeMenu))

function switchMenu() {
  toggleBtn.classList.toggle('collapsed')
  nav.classList.toggle('collapsed')
  navList.classList.toggle('collapsed')
}

function closeMenu() {
  setTimeout(() => {
    toggleBtn.classList.remove('collapsed')
    nav.classList.remove('collapsed')
    navList.classList.remove('collapsed')
  }, 1000)
}