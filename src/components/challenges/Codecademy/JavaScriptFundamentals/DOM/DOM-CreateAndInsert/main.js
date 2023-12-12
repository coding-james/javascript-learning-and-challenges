// Create <li> element
let newAttraction = document.createElement("li");

// Give it an id
newAttraction.id = "vespa";

// assign inner text
newAttraction.innerHTML = "Rent a Vespa";

// append to existing section using Id
document.getElementById("italy-attractions").appendChild(newAttraction);