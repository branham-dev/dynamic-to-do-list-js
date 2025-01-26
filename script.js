document.addEventListener("DOMContentLoaded", () => {
	// This is a callback function that will be called when the DOM is fully loaded
	// Selection of DOM elements
	const addButton = document.getElementById("add-task-btn");
	const taskInput = document.getElementById("task-input");
	const taskList = document.getElementById("task-list");

	// Function to add a task
	const addTask = () => {
		const taskText = taskInput.value.trim();

		if (!taskText) {
			alert("Please enter a task");
		} else {
			// task creation and removal
			const item = document.createElement("li");
			item.textContent = taskText;
			const deleteButton = document.createElement("button");
			deleteButton.classList.add("remove-btn");
			deleteButton.textContent = "Remove";
			deleteButton.onclick = () => {
				item.remove();
			};
			item.appendChild(deleteButton);
			taskList.appendChild(item);
			taskInput.value = "";
		}
	};

	// Event listeners for the add button and the enter key
	addButton.addEventListener("click", addTask);
	taskInput.addEventListener("keypress", (event) => {
		if (event.key === "Enter") {
			addTask();
		}
	});
	document.addEventListener("DOMContentLoaded", addTask);
});
