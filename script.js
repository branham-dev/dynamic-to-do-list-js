// This is a callback function that will be called when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
	const loadTasks = () => {
		const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
		storedTasks.forEach((taskText) => {
			addTask(taskText, false);
			console.log("taskText");
		});
	};

	// Selection of DOM elements
	const addButton = document.getElementById("add-task-btn");
	const taskInput = document.getElementById("task-input");
	const taskList = document.getElementById("task-list");

	// Function to add a task
	const addTask = (task, save = true) => {
		// const taskText = taskInput.value.trim();
		const taskText = task || taskInput.value.trim();

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
                const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
                const taskIndex = storedTasks.indexOf(taskText);
                storedTasks.splice(taskIndex, 1);
                localStorage.setItem("tasks", JSON.stringify(storedTasks));
			};
			item.appendChild(deleteButton);
			taskList.appendChild(item);
			taskInput.value = "";

			// Save tasks to local storage
			if (save) {
				const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
				storedTasks.push(taskText);
				localStorage.setItem("tasks", JSON.stringify(storedTasks));
			}
		}
	};
	loadTasks();

	// Event listeners for the add button and the enter key
	addButton.addEventListener("click", () => {
		addTask();
	});
	taskInput.addEventListener("keypress", (event) => {
		if (event.key === "Enter") {
			addTask();
		}
	});
	document.addEventListener("DOMContentLoaded", () => {
		addTask();
	});
});
// localStorage.clear();
