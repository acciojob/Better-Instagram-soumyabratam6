let draggedItem = null;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  draggedItem = event.target;
}

function drop(event) {
  event.preventDefault();
  if (draggedItem !== event.target) {
    // Swap background images
    let tempBackground = event.target.style.backgroundImage;
    event.target.style.backgroundImage = draggedItem.style.backgroundImage;
    draggedItem.style.backgroundImage = tempBackground;
  }
}