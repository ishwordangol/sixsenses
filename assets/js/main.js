
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
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
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

// popup

// $('#download-popup').click(function (event) {
//   event.preventDefault();
//   $('#popup').removeClass('hidden').hide().fadeIn().find('#popup-content').css('transform', 'scale(1)');
// });

// $('#close-popup, #popup').click(function (event) {
//   if (event.target.id === 'close-popup' || event.target.id === 'popup') {
//     $('#popup').fadeOut(function () {
//       $(this).addClass('hidden').find('#popup-content').css('transform', 'scale(0.95)');
//     });
//   }
// });

// $('#popup-content').click(function (event) {
//   event.stopPropagation();
// });

// Open popup
$('.download-popup').click(function (event) {
  event.preventDefault();
  $('#popup').removeClass('hidden').hide().fadeIn().find('#popup-content').css('transform', 'scale(1)');
});

// Close popup on close button click
$('#close-popup').click(function () {
  $('#popup').fadeOut(function () {
    $(this).addClass('hidden').find('#popup-content').css('transform', 'scale(0.95)');
  });
});

// Close popup on clicking outside the popup content
$('#popup').click(function (event) {
  if (!$(event.target).closest('#popup-content').length) {
    $('#popup').fadeOut(function () {
      $(this).addClass('hidden').find('#popup-content').css('transform', 'scale(0.95)');
    });
  }
});

// Prevent closing when clicking inside the popup content
$('#popup-content').click(function (event) {
  event.stopPropagation();
});


