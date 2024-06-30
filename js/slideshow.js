let value = 0;

function slideShow() {
  const images = document.querySelectorAll('.slideshow-div img');

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  value++;

  if (value > images.length) value = 1;

  images[value - 1].style.display = 'block';

  setTimeout(slideShow, 3000);
}

slideShow();
