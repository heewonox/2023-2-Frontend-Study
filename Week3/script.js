let itemList=[];
function renderTodoItem(){
	const savedTodo = localStorage.getItem("itemList");
	const todoList = document.getElementById("todo-list");
	const doneList = document.getElementById("done-list");
	todoList.innerHTML = "";
	doneList.innerHTML = "";
	if(savedTodo){
		itemList=JSON.parse(savedTodo);
		itemList.forEach((savedItem) => {
			const item = document.createElement("li");
			const itemText = document.createElement("span");
			itemText.className = "item-text";
			itemText.addEventListener("click",toggleItem);
			itemText.innerText = savedItem.text;
			const deleteButton = document.createElement("button");
			deleteButton.className = "delete-button";
			deleteButton.addEventListener("click",removeItem);
			deleteButton.innerText = "❌";
			item.appendChild(itemText);
			item.appendChild(deleteButton);
			if(!savedItem.isDone){
				todoList.appendChild(item);
			}
			else{
				doneList.appendChild(item);
			}
		});
	}
	countItem();
};
const addTodoList = () => {
	event.preventDefault;
	const inputObject = {
		id: Date.now(),
		text: document.getElementById("input-text").value,
		isDone: false,
	};
	if(inputObject.text){
		itemList = [...itemList, inputObject];
		localStorage.setItem("itemList",JSON.stringify(itemList));
		renderTodoItem();
	}
}
const toggleItem = (e) => {
	//????
	const itemObject = itemList.find(
		(inputObject) => inputObject.text === e.target.innerText
	);
	itemObject.isDone = !itemObject.isDone;
	localStorage.setItem("itemList",JSON.stringify(itemList));
	renderTodoItem();
};
const removeItem = (e) => {
	//???
	const filteredList = itemList.filter(
		(inputObject) => inputObject.text !== e.target.parentNode.innerText.slice(0, -1)
	);
	localStorage.setItem("itemList",JSON.stringify(filteredList));
	renderTodoItem();
};
const countItem = () => {
	//???
	const todoCount = document.getElementById("todo-count");
	todoCount.innerText = `(${itemList.filter((item) => !item.isDone).length})`;
	const doneCount = document.getElementById("done-count");
	doneCount.innerText = `(${itemList.filter((item) => item.isDone).length})`;
};
window.onload = renderTodoItem();
