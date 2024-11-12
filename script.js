const sliderLeftBtn = document.getElementById('sliderLeft')
const sliderRightBtn = document.getElementById('sliderRight')

sliderLeftBtn.addEventListener('click', function () {
	handleButtonClick(sliderLeftBtn)
})

sliderRightBtn.addEventListener('click', function () {
	handleButtonClick(sliderRightBtn)
})

const sliderBlock = document.querySelector('.reviews__slider')
const sliderItemWidth = sliderBlock.querySelector('.reviews__item')
const sliderItemCount = sliderBlock.getElementsByClassName('slider__item').length

let sliderOffset
let currentSlide = 0
let currentSliderOffset = 0

function isButtonDisabled() {
	const breakpoints = [
		{ minWidth: 767, disableAt: sliderItemCount - 3 },
		{ minWidth: 480, disableAt: sliderItemCount - 2 },
		{ minWidth: 0, disableAt: sliderItemCount - 1 }
	]

	const disableAt = breakpoints.find(bp => window.innerWidth >= bp.minWidth).disableAt

	sliderRightBtn.disabled = currentSlide === disableAt
	sliderLeftBtn.disabled = currentSlide === 0
}

function handleButtonClick(buttonId) {
	sliderOffset = -sliderItemWidth.offsetWidth - 20
	if (buttonId === sliderLeftBtn) {
		currentSlide -= 1
		currentSliderOffset -= sliderOffset
	} else if (buttonId === sliderRightBtn) {
		currentSlide += 1
		currentSliderOffset += sliderOffset
	}
	isButtonDisabled()
	sliderBlock.style.transform = `translateX(${currentSliderOffset}px)`;
}

window.addEventListener('resize', handleResize);

function handleResize() {
	isButtonDisabled()
	currentSlide = 0
	currentSliderOffset = 0
	sliderBlock.style.transform = `translateX(${currentSliderOffset}px)`;
}

