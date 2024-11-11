




// function handleButtonClick(buttonId) {
// 	slideOffset = -(slider.offsetWidth * (33.333333 / 100) + 6)
// 	if (buttonId === 'sliderLeft') {
// 		currentSlideCount += slideOffset
// 	} else if (buttonId === 'sliderRight') {
// 		currentSlideCount -= slideOffset
// 	}
// 	slider.style.left = `${currentSlideCount}px`
// }

document.getElementById('sliderLeft').addEventListener('click', function () {
	handleButtonClick('sliderLeft')
});

document.getElementById('sliderRight').addEventListener('click', function () {
	handleButtonClick('sliderRight')
});

const sliderLeftBtn = document.getElementById('sliderLeft')
const sliderRightBtn = document.getElementById('sliderRight')

const slider = document.querySelector('.reviews__slider')
const sliderItemCount = slider.getElementsByClassName('slider__item').length

let currentSlide = 0
let slideOffset = null
let currentSlideCount = 0

function handleButtonClick(buttonId) {
	slideOffset = -(slider.offsetWidth * (33.333333 / 100) + 6)
	if (buttonId === 'sliderLeft') {
		currentSlide -= 1
		currentSlideCount -= slideOffset
	} else if (buttonId === 'sliderRight') {
		currentSlide += 1
		currentSlideCount += slideOffset
	}

	sliderLeftBtn.disabled = currentSlide === 0;
	sliderRightBtn.disabled = currentSlide === sliderItemCount - 1;
	slider.style.left = `${currentSlideCount}px`
}


window.addEventListener('resize', handleResize);

function handleResize() {
	sliderLeftBtn.disabled = currentSlide === 0;
	sliderRightBtn.disabled = currentSlide === sliderItemCount - 1;
	currentSlide = 0
	currentSlideCount = 0
	slider.style.left = 0
}

