
function initSlider(options) {

	// update displayed value
	function updateValue() {
		sliderValue.innerHTML = slider.value;
	}

	// set variables
	var slider = document.getElementById(options.sliderId);
	var sliderValue = document.getElementById(options.sliderValueId);

	// display value on page load
	updateValue();

	// display value when changes
	slider.addEventListener('input', updateValue);
}

// Initialize
new initSlider({
	"sliderId": "slider1",
	"sliderValueId": "sliderValue1"
});
new initSlider({
	"sliderId": "slider2",
	"sliderValueId": "sliderValue2"
});
