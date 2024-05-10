//your code here
// Get all elements with the class name 'image'
var images = document.querySelectorAll('.image');

var draggedElement = null;

images.forEach(function(image) {
  image.addEventListener('dragstart', function(event) {
    draggedElement = event.target;
    event.target.classList.add('selected');
  });
});

document.getElementById('parent').addEventListener('dragover', function(event) {
  event.preventDefault();
});
document.getElementById('parent').addEventListener('drop', function(event) {
  event.preventDefault();
  if (draggedElement) {
    var tempBackground = draggedElement.style.backgroundImage;
    draggedElement.style.backgroundImage = event.target.style.backgroundImage;
    event.target.style.backgroundImage = tempBackground;
    draggedElement.classList.remove('selected');
    draggedElement = null;
  }
});