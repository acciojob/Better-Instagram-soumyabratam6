document.addEventListener('DOMContentLoaded', function () {
  const divs = document.querySelectorAll('.draggable');

  divs.forEach(div => {
    div.addEventListener('dragstart', dragStart);
    div.addEventListener('dragover', dragOver);
    div.addEventListener('drop', drop);
  });

  function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    const draggedId = event.dataTransfer.getData('text');
    const draggedElement = document.getElementById(draggedId);
    const targetElement = event.target;

    if (draggedElement !== targetElement) {
      // Swap background images
      const tempBackground = targetElement.style.backgroundImage;
      targetElement.style.backgroundImage = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = tempBackground;
    }
  }
});
