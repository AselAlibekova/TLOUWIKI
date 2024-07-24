
document.addEventListener('DOMContentLoaded', (event) => {
  const images = [
      'images/lb1.webp',
      'images/lb2.webp',
      'images/lb3.webp',
      'images/lb5.jfif',
      'images/lb4.webp',
      'images/lb6.jpg'
  ];
  
  let currentIndex = 0;
  
  function updateModalImage(index) {
      const modalImage = document.getElementById('modalImage');
      modalImage.src = images[index];
      currentIndex = index;
  }

  document.querySelectorAll('[data-bs-slide-to]').forEach((img, index) => {
      img.addEventListener('click', () => {
          updateModalImage(index);
      });
  });
  
  document.getElementById('prevButton').addEventListener('click', () => {
      const newIndex = (currentIndex - 1 + images.length) <= 0 ? images.length - 1 : (currentIndex - 1 + images.length) % images.length;
      updateModalImage(newIndex);
  });
  
  document.getElementById('nextButton').addEventListener('click', () => {
      const newIndex = (currentIndex + 1) % images.length;
      updateModalImage(newIndex);
  });
});


  var data = [];

  
  function extractText(element) {
    if (element) {
      return element.text().trim();
    }
    return "";
  }

 

  var $videoSrc;


  $(".btn-dark").on("click", function () {
    $videoSrc = $(this).data("src");
  });

 
  $("#staticBackdrop").on("shown.bs.modal", function () {
    $("#youtubeVideo").attr("src", $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  });

  
  $("#staticBackdrop").on("hidden.bs.modal", function () {
    $("#youtubeVideo").attr("src", "");
  });
  const animatedButtons = document.querySelectorAll('.visit');

 
  animatedButtons.forEach(button => {
    button.addEventListener("mouseover", () => {
      
      button.classList.add('shadow-pop-tr-hovered');
    });

    button.addEventListener("mouseout", () => {
    
      button.classList.remove('shadow-pop-tr-hovered');
    });
  });

