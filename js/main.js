const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')
const navLink = document.querySelectorAll('.nav__link')

navLink.forEach(item => {
	item.addEventListener('click', () => {
		navBtn.classList.toggle('is-active')
		navMobile.classList.remove('nav-mobile--active')
	})
})

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
}

navBtn.addEventListener('click', handleNav)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
