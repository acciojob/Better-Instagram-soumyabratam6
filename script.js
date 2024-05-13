// Get all elements with the class name 'image'
var images = document.querySelectorAll('.image');

var draggedElement = null;

images.forEach(function(image) {
	image.setAttribute('draggable', true);
  
  	image.addEventListener('dragstart', function(event) {
    	draggedElement = event.target;
	    event.dataTransfer.setData('text', event.target.id);
     	event.target.classList.add('selected');
  	});

  	image.addEventListener('dragover', function(event) {
  		event.preventDefault();
	});

	image.addEventListener('drop', function(event) {
  		event.preventDefault();
		var id = event.dataTransfer.getData('text');
  		if (draggedElement) {
    		var tempInnerText = draggedElement.innerText;
            draggedElement.innerText = event.target.innerText;
            event.target.innerText = tempInnerText;
    		draggedElement.classList.remove('selected');
    		draggedElement = null;
  		}
	});  
});