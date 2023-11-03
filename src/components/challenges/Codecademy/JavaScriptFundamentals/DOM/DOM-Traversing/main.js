// Create a variable which is set to first child of the document body
const first = document.body.children[0];
first.innerHTML = 'BROWN BEARS ARE AWESOME!';

// Select the parentNode of first and change background colour
first.parentNode.style.backgroundColor = "beige";