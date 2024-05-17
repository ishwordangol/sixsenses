
// featured sliders
$("#floorplanSlider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows: false,
  centerMode: true,
  centerPadding: '270px',
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

const $countryCodeSelect = $('#country-code');
const $phoneNumberInput = $('#phone-number');
const $selectedFlag = $('#selected-flag');

$countryCodeSelect.on('change', updatePhoneNumber);

function updatePhoneNumber() {
  const selectedOption = $countryCodeSelect.find(':selected');
  const countryCode = selectedOption.val();
  const flagClass = 'flag-icon-' + selectedOption.data('flag');
  const currentNumber = $phoneNumberInput.val().replace(/^\+\d+ /, '');
  $phoneNumberInput.val(countryCode + ' ' + currentNumber);
  $phoneNumberInput.focus();

  // Update the flag icon
  $selectedFlag.attr('class', 'flag-icon ' + flagClass);
}

// Initialize the input with the default country code and flag
updatePhoneNumber();

$(window).scrollTop(0);


