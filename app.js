const mobileMenuBtn = document.querySelector('.menu-btn')
const mobileMenu = document.querySelector('nav')
const navbar = document.querySelector('header')

window.addEventListener('scroll', () => {
	navbar.style.position = window.scrollY > 80 ? 'fixed' : 'relative'
})

let isMobileMenuOpen = false

mobileMenuBtn.addEventListener('click', () => {
	isMobileMenuOpen = !isMobileMenuOpen
	const displayStyle = isMobileMenuOpen ? 'flex' : 'none'
	mobileMenu.style.display = displayStyle
	mobileMenuBtn.classList.toggle('close', isMobileMenuOpen)
})
