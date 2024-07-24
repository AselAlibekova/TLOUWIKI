var rows = 3;
var columns = 3;

var currTile;
var otherTile; 

var turns = 0;


var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "images/" + imgOrder.shift() + ".jpg";

            
            tile.addEventListener("dragstart", dragStart);  
            tile.addEventListener("dragover", dragOver);    
            tile.addEventListener("dragenter", dragEnter); 
            tile.addEventListener("dragleave", dragLeave);  
            tile.addEventListener("drop", dragDrop);       
            tile.addEventListener("dragend", dragEnd);      

            document.getElementById("board").append(tile);
        }
    }
};

function dragStart() {
    currTile = this; 
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    if (!otherTile.src.includes("3.jpg")) {
        return;
    }

    let currCoords = currTile.id.split("-"); 
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c - 1;
    let moveRight = r == r2 && c2 == c + 1;

    let moveUp = c == c2 && r2 == r - 1;
    let moveDown = c == c2 && r2 == r + 1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }
}

 searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Backspace' && searchInput.value === '') {
 
    searchResults.innerHTML = '';
  }
});

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

var data = [];


function extractText(element) {
  if (element) {
    return element.innerText.trim();
  }
  return '';
}


var pageTitle = extractText(document.querySelector('head title'));
data.push({ title: 'Page Title', content: pageTitle });


 
  animatedButtons.forEach(button => {
    button.addEventListener("mouseover", () => {
      
      button.classList.add('shadow-pop-tr-hovered');
    });

    button.addEventListener("mouseout", () => {
    
      button.classList.remove('shadow-pop-tr-hovered');
    });
  });
