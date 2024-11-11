const sliderLeftBtn = document.getElementById('sliderLeft')
const sliderRightBtn = document.getElementById('sliderRight')

const slider = document.querySelector('.reviews__slider')
let currentSlideCount = 0
let sliderWidth = null
let slideOffset = null

function slideToRight() {
	slideOffset = -(slider.offsetWidth * (33.333333 / 100) + 6)
	currentSlideCount += slideOffset
	slider.style.left = `${currentSlideCount}px`
}

function slideToLeft() {
	slideOffset = -(slider.offsetWidth * (33.333333 / 100) + 6)
	currentSlideCount -= slideOffset
	slider.style.left = `${currentSlideCount}px`
}

function handleResize() {
	currentSlideCount = 0
	slider.style.left = 0
}

window.addEventListener('resize', handleResize);