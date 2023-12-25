let autoplayEnabled = true;
const carousel = $('#myCarousel');
const playPauseIcons = ['playPauseIcon0'];

$(document).ready(function(){
    carousel.slick({
      dots: true,
      infinite: true,
      speed: 2000,
      centerMode: true,
      centerPadding: '120px',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: autoplayEnabled,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

    // Mengatur listener untuk perubahan slide
    carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        hideCustomButton(1); // Menyembunyikan tombol sebelum slide berubah
    });

    carousel.on('afterChange', function(event, slick, currentSlide){
        showCustomButton(5); // Menampilkan tombol setelah slide berubah
    });
});

function togglePlayPause(slideIndex) {
    autoplayEnabled = !autoplayEnabled;
    carousel.slick('slickSetOption', 'autoplay', autoplayEnabled);

    if (autoplayEnabled) {
        carousel.slick('slickPlay');
        playPauseIcons.forEach(playIcon => document.getElementById('playIcon').setAttribute('points', '5 3 19 12 5 21 5 3'));
    } else {
        carousel.slick('slickPause');
        playPauseIcons.forEach(playIcon => document.getElementById('playIcon').setAttribute('points', '4 4 4 20 20 20 20 4'));
    }
}

function hideCustomButton() {
    const customButton = document.querySelector('.custom-button');
    customButton.classList.remove('show'); // Menyembunyikan tombol sebelum slide berubah
}

function showCustomButton() {
    const customButton = document.querySelector('.custom-button');
    customButton.classList.add('show'); // Menampilkan tombol dengan efek swipe dari bawah
}

const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click',() => {
  selectElement('header').classList.toggle('active');
})

document.getElementById('navbarToggle').addEventListener('click', function() {
  this.classList.toggle('open');
});
