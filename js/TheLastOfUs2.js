$(document).ready(function () {
  var audio = $("#backgroundAudio")[0];
  var playPauseButton = $("#playPauseButton");

  playPauseButton.on("click", function () {
    if (audio.paused) {
      audio.play();
      playPauseButton.html("Pause");
    } else {
      audio.pause();
      playPauseButton.html("Play");
    }
  });

}); 


  searchInput.on("keyup", function (event) {
    if (event.key === "Backspace" && searchInput.val() === "") {
      
      searchResults.html("");
    }
  });


  var data = [];




  var $videoSrc;




 
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

