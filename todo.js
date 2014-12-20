// Each item should look like this:
// <li><span>Add grid to this app</span> <input type="checkbox" /></li>

//lessons learned
// - Avoid global variables
// - Strive to make functions reusable
// - Don't use getElementbyId in a function, instead

function addNewItem(list, itemText){
	var listItem = document.createElement("li")
	listItem.innerText = itemText;

	list.appendChild(listItem);
}
//creates an element to add to this list
//createElement takes a string of the element you want to create

function deleteNewItem(){
	//function that deletes Item from the DOM
}

function moveNewItem(){
	//function that moves item from column to column 
	//Append to inProgress column
	//or Append to Delete column
}

var newItem = document.getElementById("todoList");
//Reference to the new item

btnAdd.onclick = function() {
	var itemText = prompt("What would you like");

	if (itemText === false || " ") {
		return false;
	}

	addNewItem(document.getElementById("todoList"), itemText);
	// addNewItem(document.getElementById("inProgress"));
};
//Create a function directly here
//Function with () calls the function immediately. Handler goes to addNewItem function. 
//to make sure this doesn't fire immediately, wrap it in an anonymouse function. 