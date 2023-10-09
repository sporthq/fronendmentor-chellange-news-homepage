const btnMenu = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const html = document.querySelector('html')
console.log(html);
function handleMenuNav() {
	header.classList.toggle('nav-open');

	if(header.classList.contains('nav-open')){
		html.style.overflowY = 'hidden'
		overlay.style.display = 'block'
	} else {
		html.style.overflowY = 'auto';
		overlay.style.display = 'none';

	}
}

btnMenu.addEventListener('click', handleMenuNav);
